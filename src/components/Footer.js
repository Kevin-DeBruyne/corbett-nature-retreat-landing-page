import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="footer">
      <Container>
        <Row className="footer-content">
          {/* Company Info */}
          <Col lg={4} md={6} className="mb-4">
            <div className="footer-section">
              <h4 className="footer-title">
                <i className="fas fa-tree"></i> Corbett Nature Retreat
              </h4>
              <p className="footer-description">
                Experience the perfect blend of adventure and tranquility in the heart of 
                Jim Corbett National Park. Your gateway to nature's paradise.
              </p>
              <div className="social-links">
                <a href="#" className="social-link" title="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-link" title="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="social-link" title="WhatsApp">
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a href="#" className="social-link" title="YouTube">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </Col>

          {/* Quick Links */}
          <Col lg={2} md={6} className="mb-4">
            <div className="footer-section">
              <h5 className="footer-subtitle">Quick Links</h5>
              <ul className="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#accommodation">Accommodation</a></li>
                <li><a href="#activities">Activities</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#jimcorbett">Nearby Attractions</a></li>
              </ul>
            </div>
          </Col>

          {/* Services */}
          <Col lg={2} md={6} className="mb-4">
            <div className="footer-section">
              <h5 className="footer-subtitle">Services</h5>
              <ul className="footer-links">
                <li><a href="#accommodation">Tent Camping</a></li>
                <li><a href="#activities">Wildlife Safari</a></li>
                <li><a href="#activities">Nature Walks</a></li>
                <li><a href="#activities">Bird Watching</a></li>
                <li><a href="#activities">Bonfire Evenings</a></li>
                <li><a href="#jimcorbett">Safari Bookings</a></li>
              </ul>
            </div>
          </Col>

          {/* Contact Info */}
          <Col lg={4} md={6} className="mb-4">
            <div className="footer-section">
              <h5 className="footer-subtitle">Contact Info</h5>
              <div className="contact-info">
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Village - Kyari, Ramnagar, (Nainital), Uttarakhand - 244715</span>
                </div>
                <div className="contact-item">
                  <i className="fas fa-phone"></i>
                  <a href="tel:+918449506167">+91 84495 06167</a>
                </div>
                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <a href="mailto:enquiry@corbettnatureretreat.com">enquiry@corbettnatureretreat.com</a>
                </div>
                <div className="contact-item">
                  <i className="fas fa-clock"></i>
                  <span>Available 24/7</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Bottom Footer */}
        <Row className="footer-bottom">
          <Col lg={6} className="mb-3">
            <div className="copyright">
              <p>&copy; {currentYear} Corbett Nature Retreat. All rights reserved.</p>
            </div>
          </Col>
          <Col lg={6} className="mb-3">
            <div className="footer-bottom-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#contact">Contact Us</a>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Back to Top Button */}
      <button 
        className={`back-to-top ${showBackToTop ? 'show' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        title="Back to Top"
      >
        <i className="fas fa-chevron-up"></i>
      </button>
    </footer>
  );
};

export default Footer; 