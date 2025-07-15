import React, { useState } from 'react';
import { X, Mail, Lock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/lib/supabaseClient'; // ✅ UPDATED PATH
import { useTranslation } from 'react-i18next';


interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'login' | 'signup';
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, initialMode = 'login' }) => {
  const [mode, setMode] = useState<'login' | 'signup'>(initialMode);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [signupMessage, setSignupMessage] = useState('');
  const { login, signup } = useAuth();
  const { t } = useTranslation();

  // ✅ Debugging: Check if Supabase is initialized correctly
  console.log('✅ Supabase instance:', supabase);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSignupMessage('');

    try {
      let success = false;
      if (mode === 'login') {
        success = await login(formData.email, formData.password);
        if (success) {
          onClose();
          setFormData({ email: '', password: '', firstName: '', lastName: '' });
        } else {
          setError('Authentification échouée. Veuillez réessayer.');
        }
      } else {
        // signup
        const result = await signup(formData.email, formData.password, formData.firstName, formData.lastName);
        if (result.success) {
          setSignupMessage(result.message); // Show confirmation message
          setFormData({ email: '', password: '', firstName: '', lastName: '' });
        } else {
          setError(result.message || 'Inscription échouée. Veuillez réessayer.');
        }
      }
    } catch (err) {
      console.error('Signup/Login error:', err);
      setError('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="text-center mb-6">
          <h2 className="font-montserrat font-bold text-2xl text-gray-900 mb-2">
            {mode === 'login' ? t('auth.login') : t('auth.signup')}
          </h2>
          <p className="text-gray-600 font-open-sans">
            {mode === 'login'
              ? t('auth.loginDesc')
              : t('auth.signupDesc')}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'signup' && (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                  Prénom
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="pl-10"
                    placeholder="Votre prénom"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                  Nom
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="pl-10"
                    placeholder="Votre nom"
                  />
                </div>
              </div>
            </div>
          )}

          <div>
            <Label htmlFor="email" className="text-sm font-medium text-gray-700">
              {t('auth.email')}
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="pl-10"
                placeholder={t('auth.emailPlaceholder')}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="password" className="text-sm font-medium text-gray-700">
              {t('auth.password')}
            </Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleInputChange}
                className="pl-10"
                placeholder={t('auth.passwordPlaceholder')}
              />
            </div>
          </div>

          {error && (
            <div className="text-red-600 text-sm text-center">
              {error}
            </div>
          )}

          {signupMessage && (
            <div className="text-green-600 text-sm text-center mt-2">
              {signupMessage}
            </div>
          )}

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-secondary hover:bg-secondary/90 text-white"
          >
            {isLoading ? t('auth.loading') : (mode === 'login' ? t('auth.loginBtn') : t('auth.signupBtn'))}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            {mode === 'login' ? t('auth.noAccount') : t('auth.haveAccount')}
            <button
              onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
              className="ml-1 text-primary hover:underline font-medium"
            >
              {mode === 'login' ? t('auth.signupBtn') : t('auth.loginBtn')}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};
