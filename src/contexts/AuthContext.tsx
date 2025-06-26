import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';


interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) => Promise<{ success: boolean; message: string }>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [signupMessage, setSignupMessage] = useState('');

  useEffect(() => {
    const storedUser = localStorage.getItem('healthmour_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const signup = async (
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ): Promise<{ success: boolean; message: string }> => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error || !data.user) {
      return {
        success: false,
        message: error?.message || 'Signup failed',
      };
    }

    return {
      success: true,
      message: 'Signup successful! Please confirm your email before logging in.',
    };
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error || !data.user) {
      console.error('Login error:', error?.message);
      return false;
    }

    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('id, email, first_name, last_name')
      .eq('id', data.user.id)
      .maybeSingle();

    if (profileError || !profile) {
      console.warn('Profile not found or not confirmed.', profileError);
      console.log('Session:', await supabase.auth.getSession());
      return false;
    }

    const u: User = {
      id: profile.id,
      email: profile.email,
      firstName: profile.first_name,
      lastName: profile.last_name,
    };

    setUser(u);
    localStorage.setItem('healthmour_user', JSON.stringify(u));
    return true;
  };

  const logout = () => {
    supabase.auth.signOut();
    setUser(null);
    localStorage.removeItem('healthmour_user');
  };

  const updateProfile = async (newFirstName: string, newLastName: string) => {
    if (user) {
      const { data, error } = await supabase
        .from('profiles')
        .update({ first_name: newFirstName, last_name: newLastName })
        .eq('id', user.id);

      if (error) {
        console.error(error.message);
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        signup,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
