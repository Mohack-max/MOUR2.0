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
  const [showReset, setShowReset] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetMessage, setResetMessage] = useState('');
  const [resetLoading, setResetLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    // Sign in with Supabase Auth
    const { data, error: authError } = await supabase.auth.signInWithPassword({ email, password });
    if (authError || !data.user) {
      setError('Invalid email or password.');
      setLoading(false);
      return;
    }
    // Check is_admin flag in profiles
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('is_admin')
      .eq('id', data.user.id)
      .maybeSingle();
    if (profileError || !profile || !profile.is_admin) {
      setError('You are not authorized as an admin.');
      setLoading(false);
      return;
    }
    setLoading(false);
    onSuccess();
    onClose();
  };

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setResetLoading(true);
    setResetMessage('');
    const { error } = await supabase.auth.resetPasswordForEmail(resetEmail);
    if (error) {
      setResetMessage('Failed to send reset email.');
    } else {
      setResetMessage('Password reset email sent! Check your inbox.');
    }
    setResetLoading(false);
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
        {!showReset ? (
          <>
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
            <div className="text-center mt-4">
              <button
                className="text-blue-600 hover:underline text-sm"
                onClick={() => setShowReset(true)}
              >
                Forgot Password?
              </button>
            </div>
          </>
        ) : (
          <>
            <form onSubmit={handleReset}>
              <input
                type="email"
                placeholder="Enter your admin email"
                value={resetEmail}
                onChange={e => setResetEmail(e.target.value)}
                className="w-full border rounded p-2 mb-4"
                required
              />
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 rounded font-bold"
                disabled={resetLoading}
              >
                {resetLoading ? 'Sending...' : 'Send Reset Email'}
              </button>
            </form>
            {resetMessage && <div className="mt-2 text-center text-green-600">{resetMessage}</div>}
            <div className="text-center mt-4">
              <button
                className="text-gray-600 hover:underline text-sm"
                onClick={() => setShowReset(false)}
              >
                Back to Login
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminLoginModal; 
