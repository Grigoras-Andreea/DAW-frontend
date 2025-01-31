import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import HomePage from './HomePage';
import RecipeDetailsPage from './RecipeDetailsPage';
import ContactPage from './ContactPage';
import CreateRecipePage from './CreateRecipePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} /> {/* Login page route */}
        <Route path="/register" element={<RegisterPage />} /> {/* Register page route */}
        <Route path="/home" element={<HomePage />} /> {/* Home page route */}
        <Route path="/recipe/:id" element={<RecipeDetailsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/create" element={<CreateRecipePage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
