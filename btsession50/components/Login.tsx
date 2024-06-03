import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [role, setRole] = useState<string>('');
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const user = {
    email: 'user@example.com',
    password: 'password123',
    role: 'admin',
  };

  const handleLogin = () => {
    if (email === user.email && password === user.password && role === user.role) {
      localStorage.setItem('auth', 'true');
      navigate('/account');
    } else {
      setError('Invalid login credentials');
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div>
          <label>Role:</label>
          <input type="text" value={role} onChange={(e) => setRole(e.target.value)} required />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
