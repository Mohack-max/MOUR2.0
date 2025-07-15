import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { supabase } from '@/lib/supabaseClient';
import { AuthModal } from '@/components/AuthModal';
import { useTranslation } from 'react-i18next';
import RequestAccessModal from '@/components/RequestAccessModal';

interface PrivateDocument {
  id: string;
  title: string;
  description: string;
  file_url?: string;
}

interface AccessRequest {
  id: string;
  document_id: string;
  status: 'pending' | 'approved' | 'denied';
}

const PrivateDocuments = () => {
  const { isAuthenticated, user } = useAuth();
  const [documents, setDocuments] = useState<PrivateDocument[]>([]);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState<PrivateDocument | null>(null);
  const [accessRequests, setAccessRequests] = useState<AccessRequest[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchDocuments = async () => {
      const { data, error } = await supabase
        .from('private_documents')
        .select('id, title, description, file_url');
      if (!error && data) setDocuments(data);
    };
    fetchDocuments();
  }, []);

  useEffect(() => {
    if (isAuthenticated && user) {
      const fetchRequests = async () => {
        const { data, error } = await supabase
          .from('document_access_requests')
          .select('id, document_id, status')
          .eq('user_id', user.id);
        if (!error && data) setAccessRequests(data);
      };
      fetchRequests();
    } else {
      setAccessRequests([]);
    }
  }, [isAuthenticated, user]);

  const handleRequestAccess = (doc: PrivateDocument) => {
    if (!isAuthenticated) {
      setShowAuthModal(true);
    } else {
      setSelectedDoc(doc);
      setShowRequestModal(true);
    }
  };

  const getRequestStatus = (docId: string) => {
    return accessRequests.find(r => r.document_id === docId)?.status;
  };

  return (
    <div className="min-h-screen py-16 max-w-4xl mx-auto px-4">
      <h1 className="font-montserrat font-bold text-3xl mb-8 text-center">
        {t('privateDocs.title', 'Private Documents')}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {documents.map(doc => {
          const status = getRequestStatus(doc.id);
          return (
            <Card key={doc.id} className="h-full">
              <CardContent className="p-6">
                <h2 className="font-bold text-xl mb-2">{doc.title}</h2>
                <p className="text-gray-600 mb-4">{doc.description}</p>
                {status === 'approved' && doc.file_url ? (
                  <a
                    href={doc.file_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mb-2 text-primary underline"
                  >
                    {t('privateDocs.viewDocument', 'View Document')}
                  </a>
                ) : status === 'pending' ? (
                  <div className="mb-2 text-yellow-600 font-semibold">
                    {t('privateDocs.pending', 'Request Pending Approval')}
                  </div>
                ) : status === 'denied' ? (
                  <div className="mb-2 text-red-600 font-semibold">
                    {t('privateDocs.denied', 'Request Denied')}
                  </div>
                ) : (
                  <Button onClick={() => handleRequestAccess(doc)}>
                    {t('privateDocs.requestAccess', 'Request Access')}
                  </Button>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
      {showRequestModal && selectedDoc && (
        <RequestAccessModal
          document={selectedDoc}
          onClose={() => setShowRequestModal(false)}
        />
      )}
    </div>
  );
};

export default PrivateDocuments; 
