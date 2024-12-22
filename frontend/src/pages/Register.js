import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../utils/api';
import { useTranslation } from 'react-i18next'; 
import './Register.css';

const Register = () => {
  const { t } = useTranslation(); 
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(formData);
      setMessage(t('registrationSuccess'));
      setTimeout(() => navigate('/'), 2000);
    } catch (err) {
      setMessage(err.response?.data?.message || t('registrationFail'));
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>{t('register')}</h2>
        <form onSubmit={handleSubmit} className="register-form">
          <input
            type="text"
            placeholder={t('namePlaceholder')}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder={t('emailPlaceholder')}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder={t('passwordPlaceholder')}
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />
          <button type="submit" className="register-button">
            {t('registerButton')}
          </button>
        </form>
        {message && <p className="register-message">{message}</p>}
        <p className="login-link">
          {t('alreadyHaveAccount')} <a href="/">{t('loginHere')}</a>
        </p>
      </div>
    </div>
  );
};

export default Register;