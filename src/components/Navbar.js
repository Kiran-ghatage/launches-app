import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          SpaceX Launches
        </Link>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/launches" className="navbar-link">Launches</Link>
          <Link to="/#" className="navbar-link">Login</Link>
          <Link to="/#" className="navbar-link">Signup</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
