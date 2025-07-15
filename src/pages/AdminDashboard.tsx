import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/lib/supabaseClient';

interface PrivateDocument {
  id: string;
  title: string;
  description: string;
  file_url: string;
  created_at: string;
}

interface Request {
  id: string;
  user_id: string;
  document_id: string;
  reason: string;
  status: 'pending' | 'approved' | 'denied';
  created_at: string;
  document_title?: string;
  user_email?: string;
}

const AdminDashboard = () => {
  const [tab, setTab] = useState<'documents' | 'requests'>('documents');
  const [documents, setDocuments] = useState<PrivateDocument[]>([]);
  const [requests, setRequests] = useState<Request[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [uploading, setUploading] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const navigate = useNavigate();

  // Auth check
  useEffect(() => {
    const checkAdmin = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate('/');
        return;
      }
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('is_admin')
        .eq('id', session.user.id)
        .maybeSingle();
      if (profileError || !profile || !profile.is_admin) {
        navigate('/');
        return;
      }
    };
    checkAdmin();
  }, [navigate]);

  // Fetch documents and requests
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError('');
      const { data: docs, error: docError } = await supabase
        .from('private_documents')
        .select('*')
        .order('created_at', { ascending: false });
      const { data: reqs, error: reqError } = await supabase
        .from('document_access_requests')
        .select('id, user_id, document_id, reason, status, created_at, private_documents(title), auth.users(email)')
        .order('created_at', { ascending: false });
      if (docError || reqError) {
        setError('Failed to fetch data.');
      } else {
        setDocuments(docs || []);
        setRequests(
          (reqs || []).map((r: any) => ({
            ...r,
            document_title: r.private_documents?.title,
            user_email: r.users?.email,
          }))
        );
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  // Document upload
  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;
    setUploading(true);
    setError('');
    // Upload file to Supabase Storage
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const { data: storageData, error: storageError } = await supabase.storage
      .from('private-documents')
      .upload(fileName, file);
    if (storageError) {
      setError('File upload failed.');
      setUploading(false);
      return;
    }
    const file_url = supabase.storage.from('private-documents').getPublicUrl(fileName).data.publicUrl;
    // Insert metadata into private_documents
    const { error: insertError } = await supabase
      .from('private_documents')
      .insert({ title, description, file_url });
    if (insertError) {
      setError('Failed to save document metadata.');
      setUploading(false);
      return;
    }
    setTitle('');
    setDescription('');
    setFile(null);
    setUploading(false);
    // Refresh documents
    const { data: docs } = await supabase
      .from('private_documents')
      .select('*')
      .order('created_at', { ascending: false });
    setDocuments(docs || []);
  };

  // Delete document
  const handleDelete = async (id: string, file_url: string) => {
    setLoading(true);
    // Remove from storage
    const path = file_url.split('/').pop();
    await supabase.storage.from('private-documents').remove([path]);
    // Remove from table
    await supabase.from('private_documents').delete().eq('id', id);
    setDocuments(docs => docs.filter(d => d.id !== id));
    setLoading(false);
  };

  // Approve/Deny request
  const handleRequestAction = async (id: string, action: 'approved' | 'denied') => {
    setLoading(true);
    await supabase
      .from('document_access_requests')
      .update({ status: action })
      .eq('id', id);
    setRequests(reqs => reqs.map(r => (r.id === id ? { ...r, status: action } : r)));
    setLoading(false);
  };

  // Logout
  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-center">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded font-bold"
        >
          Logout
        </button>
      </div>
      <div className="mb-8 flex gap-4">
        <button
          className={`px-4 py-2 rounded font-bold ${tab === 'documents' ? 'bg-primary text-white' : 'bg-white text-primary border border-primary'}`}
          onClick={() => setTab('documents')}
        >
          Documents
        </button>
        <button
          className={`px-4 py-2 rounded font-bold ${tab === 'requests' ? 'bg-primary text-white' : 'bg-white text-primary border border-primary'}`}
          onClick={() => setTab('requests')}
        >
          Requests
        </button>
      </div>
      {error && <div className="text-red-600 mb-4">{error}</div>}
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : tab === 'documents' ? (
        <div>
          <form onSubmit={handleUpload} className="bg-white p-6 rounded shadow mb-8 max-w-lg">
            <h2 className="font-bold text-lg mb-4">Upload New Document</h2>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={e => setTitle(e.target.value)}
              className="w-full border rounded p-2 mb-4"
              required
            />
            <textarea
              placeholder="Description"
              value={description}
              onChange={e => setDescription(e.target.value)}
              className="w-full border rounded p-2 mb-4"
              required
            />
            <input
              type="file"
              accept="*"
              onChange={e => setFile(e.target.files?.[0] || null)}
              className="mb-4"
              required
            />
            <button
              type="submit"
              className="bg-primary text-white px-6 py-2 rounded font-bold"
              disabled={uploading}
            >
              {uploading ? 'Uploading...' : 'Upload'}
            </button>
          </form>
          <h2 className="font-bold text-lg mb-4">Existing Documents</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded shadow">
              <thead>
                <tr>
                  <th className="px-4 py-2">Title</th>
                  <th className="px-4 py-2">Description</th>
                  <th className="px-4 py-2">File</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {documents.map(doc => (
                  <tr key={doc.id} className="border-t">
                    <td className="px-4 py-2">{doc.title}</td>
                    <td className="px-4 py-2">{doc.description}</td>
                    <td className="px-4 py-2">
                      <a href={doc.file_url} target="_blank" rel="noopener noreferrer" className="text-primary underline">View</a>
                    </td>
                    <td className="px-4 py-2">
                      <button
                        className="bg-red-600 text-white px-3 py-1 rounded"
                        onClick={() => handleDelete(doc.id, doc.file_url)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded shadow">
            <thead>
              <tr>
                <th className="px-4 py-2">User Email</th>
                <th className="px-4 py-2">Document</th>
                <th className="px-4 py-2">Reason</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {requests.map(r => (
                <tr key={r.id} className="border-t">
                  <td className="px-4 py-2">{r.user_email || r.user_id}</td>
                  <td className="px-4 py-2">{r.document_title || r.document_id}</td>
                  <td className="px-4 py-2">{r.reason}</td>
                  <td className="px-4 py-2 font-semibold capitalize">{r.status}</td>
                  <td className="px-4 py-2 space-x-2">
                    {r.status === 'pending' && (
                      <>
                        <button
                          className="bg-green-600 text-white px-3 py-1 rounded"
                          onClick={() => handleRequestAction(r.id, 'approved')}
                        >
                          Approve
                        </button>
                        <button
                          className="bg-red-600 text-white px-3 py-1 rounded"
                          onClick={() => handleRequestAction(r.id, 'denied')}
                        >
                          Deny
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard; 
