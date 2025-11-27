import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import arhamLogo from '../images/arham.png';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleToggle = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" onClick={closeMenu}>
          <img src={arhamLogo} alt="Arham Consultancy" className="navbar-logo-img" />
        </Link>
      </div>
      <div className={`navbar-toggle${open ? ' open' : ''}`} onClick={handleToggle}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`navbar-links${open ? ' open' : ''}`}>
        <li><Link to="/" onClick={closeMenu} className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
        <li><Link to="/about" onClick={closeMenu} className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
        <li><Link to="/services" onClick={closeMenu} className={location.pathname === '/services' ? 'active' : ''}>Services</Link></li>
        <li><Link to="/contact" onClick={closeMenu} className={location.pathname === '/contact' ? 'active' : ''}>Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar; 