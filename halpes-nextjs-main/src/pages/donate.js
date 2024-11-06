import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout/Layout';
import dynamic from 'next/dynamic';

// Import Login component with dynamic
const Login = dynamic(() => import('../components/CausesDetails/Login'), {
  ssr: false
});

const TransactionForm = dynamic(() => import('../components/CausesDetails/TransactionForm'), {
  ssr: false
});

const Loader = dynamic(() => import('../components/CausesDetails/Loader'), {
  ssr: false
});

const DonatePage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);
  const [isLoadingAfterLogin, setIsLoadingAfterLogin] = useState(false);

  useEffect(() => {
    const storedToken = sessionStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (authToken) => {
    setIsLoadingAfterLogin(true);
    setToken(authToken);
    sessionStorage.setItem('token', authToken);

    setTimeout(() => {
      setIsAuthenticated(true);
      setIsLoadingAfterLogin(false);
    }, 2000);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setToken(null);
    sessionStorage.removeItem('token');
  };

  return (
    <Layout pageTitle="Donate">
      <div className="donate-page">
        {isLoadingAfterLogin && <Loader />}
        {!isLoadingAfterLogin && isAuthenticated ? (
          <TransactionForm onLogout={handleLogout} token={token} />
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </div>
    </Layout>
  );
};

export default DonatePage;