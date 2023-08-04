import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3 className="footer_title">InSeeks</h3>
          <p>"Unleash Your Creativity: Where Questions Ignite Imaginative Answers!"</p>
        </div>
        <div className="footer-column">
          <h3 className="footer_title">Contact</h3>
          <p>Email: buddies@gmail.com</p>
          <p>Phone: (+91) 0000000</p>
        </div>
        <div className="footer-column">
          <h3 className="footer_title">Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer" className="icon"><i className="fa fa-linkedin"></i></a>
            <a href="https://www.twitter.com/example" target="_blank" rel="noopener noreferrer" className="icon"><i className="fa fa-github"></i></a>
            <a href="https://www.instagram.com/example" target="_blank" rel="noopener noreferrer" className="icon"><i className="fa fa-twitter"></i></a>
          </div>
        </div>

        <div className="footer-colum">
          <h3 className="footer_title">Nav Links</h3>
          <ul className="nav-links">
            <li><a href="#contact"><p>Contact</p></a></li>
            <li><a href="#contact"><p>About</p></a></li>
            <li><a href="#contact"><p>Dashboard</p></a></li>
            <li><a href="#contact"><p>Notifications</p></a></li>
          </ul>
        </div>

      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} InSeeks All rights reserved.</p>
        <p>Made with ♥ by Buddies</p>
        
      </div>
    </footer>
  );
};

export default Footer;
