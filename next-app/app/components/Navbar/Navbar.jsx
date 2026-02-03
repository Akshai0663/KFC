"use client";
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="/images/kfc-logo.png" alt="" />
      </div>

      <ul className="nav-links">
        <li>Menu</li>
        <li>Rewards</li>
        <li>Gift Cards</li>
      </ul>
      <button className="signin-btn">Sign In</button>
    </div>
  );
};

export default Navbar;
