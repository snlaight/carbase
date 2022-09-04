import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { supabase } from '@utils/supabase';
import { APP_HOME_ROUTE, APP_AUTH_ROUTE } from '@utils/constants';
import { useMessage } from '@utils/useMessage';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user);
  const [modalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userLoading, setUserLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const { handleMessage } = useMessage();

  const navigate = useNavigate();

  const handleSignUp = async (payload) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signUp(payload);
      if (error) {
        handleMessage({
          type: 'error',
          message: error.message,
        });
      } else {
        setIsModalOpen(false);
        handleMessage({
          type: 'success',
          message: 'Account created successfully. Please login using the magic link in your provided email.',
        });
      }
    } catch (e) {
      setIsModalOpen(false);
      handleMessage({
        type: 'error',
        message: e.error.description || e,
      });
    } finally {
      setIsModalOpen(false);
      setLoading(false);
    }
  };

  const handleSignIn = async (payload) => {
    try {
      setLoading(true);
      const { error, user } = await supabase.auth.signIn(payload);
      if (error) {
        handleMessage({
          type: 'error',
          message: error.message,
        });
      } else {
        setIsModalOpen(false);
        handleMessage({
          type: 'success',
          message: payload.password.length
            ? `Welcome, ${user.email}`
            : 'Please check your email for the magic link',
        });
      }
    } catch (e) {
      handleMessage({
        message: e.error.description || e,
        type: 'error',
      });
    } finally {
      setIsModalOpen(false);
      setLoading(false);
    }
  };

  const handleSignInWithProvider = async (provider) => {
    await supabase.auth.signIn({ provider });
  };

  const handleSignInWithGithub = async () => {
    await supabase.auth.signIn({ provider: 'github' });
  };

  const handleSignOut = async () => await supabase.auth.signOut();

  useEffect(() => {
    const user = supabase.auth.user();

    if (user) {
      setUser(user);
      setUserLoading(false);
      setLoggedIn(true);
    } else {
      setUserLoading(false);
    }

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        const user = session?.user || null;
        setUserLoading(false);
        if (user) {
          setUser(user);
          setLoggedIn(true);
          navigate(APP_HOME_ROUTE, {replace:true});
        } else {
          setUser(null);
          navigate(APP_HOME_ROUTE, {replace:true});
        }
      }
    );
    return () => {
      authListener.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        handleSignUp,
        handleSignIn,
        handleSignInWithProvider,
        handleSignInWithGithub,
        handleSignOut,
        loading,
        userLoading,
        loggedIn,
        modalOpen,
        setIsModalOpen
      }}>
      {children}
    </AuthContext.Provider>
  );
};
