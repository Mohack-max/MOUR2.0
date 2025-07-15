import { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { supabase } from '@/lib/supabaseClient';

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const accessToken = searchParams.get('access_token');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    if (!accessToken) {
      setMessage('Invalid or missing token.');
      setLoading(false);
      return;
    }
    // Set the session with the access token
    const { error: sessionError } = await supabase.auth.setSession({
      access_token: accessToken,
      refresh_token: searchParams.get('refresh_token') || '',
    });
    if (sessionError) {
      setMessage('Invalid or expired token.');
      setLoading(false);
      return;
    }
    // Update the password
    const { error } = await supabase.auth.updateUser({ password });
    if (error) {
      setMessage('Failed to reset password.');
    } else {
      setMessage('Password reset successful! You can now log in.');
      setTimeout(() => navigate('/'), 2000);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4 text-center">Reset Password</h1>
        <input
          type="password"
          placeholder="New password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full border rounded p-2 mb-4"
          required
        />
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded font-bold"
          disabled={loading}
        >
          {loading ? 'Resetting...' : 'Reset Password'}
        </button>
        {message && <div className="mt-4 text-center text-green-600">{message}</div>}
      </form>
    </div>
  );
};

export default ResetPassword; 
