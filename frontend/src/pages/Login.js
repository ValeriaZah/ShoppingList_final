import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { loginUser } from '../utils/api';
import useAuth from '../hooks/useAuth';
import './Login.css';
import { t } from 'i18next';

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await loginUser(email, password);
      login(user);
      navigate('/dashboard'); // Redirect to the dashboard
    } catch (err) {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="login">
      <h2>{t("login")}</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">{t("login")}</button>
        {error && <p className="error">{error}</p>}
      </form>
      <div className="register-link">
        <p>{t("notLogined")} <Link to="/register">{t("registerHere")}</Link></p>
      </div>
    </div>
  );
};

export default Login;
