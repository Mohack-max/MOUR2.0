import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/lib/supabaseClient';

const ADMIN_EMAIL = 'mohamedyoussoufkeita4@gmail.com'; // <-- Set your admin email here

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [locked, setLocked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check for existing Supabase Auth session
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session && session.user.email === ADMIN_EMAIL) {
        navigate('/admin-dashboard');
      } else {
        await supabase.auth.signOut();
      }
    };
    checkSession();
  }, [navigate]);

  useEffect(() => {
    if (locked) {
      const timer = setTimeout(() => {
        setLocked(false);
        setAttempts(0);
      }, 60000);
      return () => clearTimeout(timer);
    }
  }, [locked]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (locked) return;
    setError('');
    // Use Supabase Auth for login
    const { data, error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (signInError || !data.session) {
      setAttempts(a => a + 1);
      setError(signInError?.message || 'Incorrect email or password.');
      if (attempts + 1 >= 5) {
        setLocked(true);
        setError('Too many failed attempts. Please try again in 1 minute.');
      }
      return;
    }
    // Check if the logged-in user is the admin
    if (data.session.user.email !== ADMIN_EMAIL) {
      await supabase.auth.signOut();
      setError('You are not authorized to access the admin panel.');
      return;
    }
    setError('');
    setAttempts(0);
    navigate('/admin-dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4 text-center">Admin Login</h1>
        <input
          type="email"
          placeholder="Enter admin email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full border rounded p-2 mb-4"
          required
          disabled={locked}
        />
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
