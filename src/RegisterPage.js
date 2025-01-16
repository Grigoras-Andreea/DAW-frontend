import './LoginPage.css';

import React, { useState } from 'react';
import axios from 'axios';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://localhost:7157/api/Users', {
        name,
        password,
      });

      if (response.status === 200) {
        console.log('Signup successful');
        navigate('/');
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401) {
          setErrorMessage('Invalid username or password');
        } else if (error.response.status === 500) {
          setErrorMessage('Server error, please try again later');
        } else {
          setErrorMessage('An unexpected error occurred');
        }
      } else {
        setErrorMessage('Network error, please check your connection');
      }
      alert(errorMessage);
    }
  };

  return (
    <div className="login-box">
        <div className='login-header'>
            <header>Register</header>
        </div>
      <form onSubmit={handleLogin}>
        <div className='input-box'>
          <input 
            className="input-field" 
            placeholder="Username"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className='input-box'>
          <input
            className="input-field" 
            placeholder="Password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="input-submit">
            <button type='submit' className="submit-btn" id="submit">Sign up</button>
        </div>
        <div className="sign-up-link">
            <p>Already have an account? <Link to='/'>Sign in</Link></p>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
