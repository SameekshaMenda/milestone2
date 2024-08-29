import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear any authentication data (like tokens)
    localStorage.removeItem('authToken');
    
    // Redirect to the login page
    navigate('/login');
  }, [navigate]);

  return (
    <div>
      <h2>You have been logged out</h2>
      <p>Redirecting to the login page...</p>
    </div>
  );
};

export default Logout;
