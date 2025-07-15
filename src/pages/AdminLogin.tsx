import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ENV_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;
const ADMIN_PASSWORD = ENV_PASSWORD || 'admin123';
const SESSION_DURATION_MS = 60 * 60 * 1000; // 1 hour
const MAX_ATTEMPTS = 5;
const LOCKOUT_DURATION_MS = 60 * 1000; // 1 minute

const AdminLogin = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [locked, setLocked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check for existing session and expiry
    const session = localStorage.getItem('admin_authenticated');
    const expiry = localStorage.getItem('admin_session_expiry');
    if (session === 'true' && expiry && Date.now() < Number(expiry)) {
      navigate('/admin/dashboard');
    } else {
      localStorage.removeItem('admin_authenticated');
      localStorage.removeItem('admin_session_expiry');
    }
  }, [navigate]);

  useEffect(() => {
    if (locked) {
      const timer = setTimeout(() => {
        setLocked(false);
        setAttempts(0);
      }, LOCKOUT_DURATION_MS);
      return () => clearTimeout(timer);
    }
  }, [locked]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (locked) return;
    if (password === ADMIN_PASSWORD) {
      localStorage.setItem('admin_authenticated', 'true');
      localStorage.setItem('admin_session_expiry', String(Date.now() + SESSION_DURATION_MS));
      setError('');
      setAttempts(0);
      navigate('/admin/dashboard');
    } else {
      setAttempts(a => a + 1);
      setError('Incorrect password.');
      if (attempts + 1 >= MAX_ATTEMPTS) {
        setLocked(true);
        setError('Too many failed attempts. Please try again in 1 minute.');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4 text-center">Admin Login</h1>
        <input
          type="password"
          placeholder="Enter admin password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full border rounded p-2 mb-4"
          required
          disabled={locked}
        />
        {error && <div className="text-red-600 mb-2 text-center">{error}</div>}
        <button type="submit" className="w-full bg-primary text-white py-2 rounded font-bold" disabled={locked}>
          {locked ? 'Locked' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default AdminLogin; 
