import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './Header.css'; // Estilos para o header

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Parking Management</h1>
      </div>
      <div className="auth-buttons">
        <button className="login-button">
          <FontAwesomeIcon icon={faUser} /> Login
        </button>
        <button className="register-button">
          <FontAwesomeIcon icon={faUserPlus} /> Register
        </button>
      </div>
    </header>
  );
};

export default Header;
