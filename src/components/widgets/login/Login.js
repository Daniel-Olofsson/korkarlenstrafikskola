import React from 'react';
import netlifyIdentity from '../identity/netlifyAuth'; // Adjust the path

const Login = () => {
  const login = () => {
    // Open the Netlify Identity modal for login
    netlifyIdentity.open();
  };

  const logout = () => {
    // Log the user out
    netlifyIdentity.logout();
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Login;
