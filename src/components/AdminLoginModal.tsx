import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

interface AdminLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const AdminLoginModal = ({ isOpen, onClose, onSuccess }: AdminLoginModalProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    // Query the 'admin' table for a matching email and password (plain text for now)
    const { data, error: queryError } = await supabase
      .from('admin')
      .select('*')
      .eq('email', email)
      .eq('password', password)
      .maybeSingle();
    if (queryError || !data) {
      setError('Invalid email or password.');
      setLoading(false);
      return;
    }
    setLoading(false);
    onSuccess();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl"
        >
          &times;
        </button>
        <h2 className="font-bold text-xl mb-4 text-center">Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Admin email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full border rounded p-2 mb-4"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full border rounded p-2 mb-4"
            required
          />
          {error && <div className="text-red-600 mb-2 text-center">{error}</div>}
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded font-bold"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginModal; 
