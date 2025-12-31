import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';

const address = '303, Anjaneya Prime, Nr. HDFC Bank, Waghawadi Road, Bhavnagar';
const subheader = 'Your Trusted Partner for Tax, Loan & Financial Solutions';
const phone = '+91 9427217754 | +91 8849381276';
const email = 'ronak.arhamtaxconsultancy@gmail.com';

const Footer = () => (
  <footer className="footer arham-footer">
    <div className="footer-grid">
      <div className="footer-brand">
        <span className="footer-logo">Arham Tax Consultancy</span>
        {/* <p className="footer-tagline">{subheader}</p> */}
        <div className="footer-address">
          <span className="footer-contact-label">Address</span>
          <p className="footer-tagline">{address}</p>
        </div>
      </div>
      
      <div className="footer-section">
        <h3 className="footer-section-title">Quick Links</h3>
        <nav className="footer-nav">
          <Link to="/" className="footer-link">Home</Link>
          <Link to="/about" className="footer-link">About</Link>
          <Link to="/services" className="footer-link">Services</Link>
          <Link to="/contact" className="footer-link">Contact Us</Link>
        </nav>
      </div>

      <div className="footer-section">
        <h3 className="footer-section-title">Our Services</h3>
        <nav className="footer-nav">
          {/* <Link to="/services" className="footer-link">Income Tax Filing</Link> */}
          <Link to="/services" className="footer-link">GST Registration</Link>
          <Link to="/services" className="footer-link">Business Loans</Link>
          <Link to="/services" className="footer-link">Company Registration</Link>
          <Link to="/services" className="footer-link">Financial Planning</Link>
          <Link to="/services" className="footer-link">Tax Consultation</Link>
        </nav>
      </div>
      
      <div className="footer-social-contact">
        <h3 className="footer-section-title">Contact Us</h3>
        <div className="footer-contact-simple">
          <div className="footer-contact-item">
            <span className="footer-contact-label"><FaEnvelope className="footer-contact-icon" /></span>
            <a href={`mailto:${email}`}>{email}</a>
          </div>
          <div className="footer-contact-item footer-contact-phones">
            <span className="footer-contact-label"><FaPhoneAlt className="footer-contact-icon" /></span>
            <div className="footer-phone-list">
              {phone.split('|').map((p, idx) => {
                const cleaned = p.trim();
                const telHref = cleaned.replace(/\s+/g, '');
                return (
                  <>
                    <a key={idx} className="footer-phone-link" href={`tel:${telHref}`}>{cleaned}</a>
                    {idx < phone.split('|').length - 1 && <span>&nbsp;|&nbsp;</span>}
                  </>
                );
              })}
            </div>
          </div>
        </div>
        {/* <div className="footer-social">
          <a href="https://instagram.com" className="footer-icon" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://facebook.com" className="footer-icon" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" className="footer-icon" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" className="footer-icon" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div> */}
      </div>
    </div>
    <div className="footer-bottom">
      <span>© {new Date().getFullYear()} Arham Tax Consultancy. All rights reserved.</span>
      <span>
        Handcrafted By&nbsp;
        <a style={{color:'#3b82f6'}} href='https://thebytespark.com'>
          theBytespark
        </a> 
      </span>
    </div>
  </footer>
);

export default Footer;
