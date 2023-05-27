import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          SpendSmart
        </a>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="/" className="navbar-link">
              Home
            </a>
          </li>
          <li className="navbar-item">
            <a href="/budget" className="navbar-link">
              Budget
            </a>
          </li>
          <li className="navbar-item">
            <a href="/expenditures" className="navbar-link">
              Expenditures
            </a>
           
          </li>
          <li className="navbar-item">
            <a href="/transactions" className="navbar-link">
              Transactions
            </a>
          </li>
          <li className="navbar-item">
            <a href="/about" className="navbar-link">
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
