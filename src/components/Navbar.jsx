import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavbarContent/Navbar.css';
import LogIn from './NavbarContent/LogIn';

function Navbar() {
  return (
    <div>
      <header>
        <div className="container">
          <div className="logo">
            <NavLink to="/">PurchasePlaza</NavLink> 
          </div>

          <nav>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
            <NavLink to="/category" className={({ isActive }) => (isActive ? 'active' : '')}>Category</NavLink>
            <NavLink to="/shopping" className={({ isActive }) => (isActive ? 'active' : '')}>Shopping</NavLink>
            <NavLink to="/aboutus" className={({ isActive }) => (isActive ? 'active' : '')}>About Us</NavLink>
            <NavLink to="/contactus" className={({ isActive }) => (isActive ? 'active' : '')}>Contact Us</NavLink>
          </nav>

          <div className="login">
            <LogIn  />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
