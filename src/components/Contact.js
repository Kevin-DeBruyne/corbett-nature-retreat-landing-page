import React, { useState } from "react";
import { Element } from "react-scroll";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    message: ""
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.phoneNumber || !formData.email || !formData.message) {
      setAlertType("danger");
      setAlertMessage("Please fill in all fields.");
      setShowAlert(true);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setAlertType("danger");
      setAlertMessage("Please enter a valid email address.");
      setShowAlert(true);
      return;
    }

    // Phone validation
    const phoneRegex = /^[0-9+\-\s()]{10,}$/;
    if (!phoneRegex.test(formData.phoneNumber)) {
      setAlertType("danger");
      setAlertMessage("Please enter a valid phone number.");
      setShowAlert(true);
      return;
    }

    // Simulate form submission
    setAlertType("success");
    setAlertMessage("Thank you! Your message has been sent successfully. We'll get back to you soon!");
    setShowAlert(true);
    
    // Reset form
    setFormData({
      fullName: "",
      phoneNumber: "",
      email: "",
      message: ""
    });

    // Hide alert after 5 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  return (
    <Element name="contact" className="section contact-section">
      {/* Hero Section */}
      <div className="contact-hero">
        <div className="hero-overlay">
          <Container>
            <Row className="justify-content-center">
              <Col lg={8} className="text-center">
                <h1 className="hero-title">Contact Us</h1>
                <p className="hero-subtitle">
                  For Any Query Feel Free To Connect!
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      {/* Main Content */}
      <Container className="contact-content">
        <Row>
          {/* Contact Information */}
          <Col lg={5} className="mb-5">
            <div className="contact-info">
              <h2 className="section-title">Get In Touch</h2>
              <p className="contact-intro">
                We're here to help and answer any questions you might have. 
                We look forward to hearing from you.
              </p>

              {/* Address */}
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact-details">
                  <h4>Our Address</h4>
                  <p>Village - Kyari, Ramnagar, (Nainital), Uttarakhand - 244715</p>
                </div>
              </div>

              {/* Phone */}
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="contact-details">
                  <h4>Call Us Available 24/7</h4>
                  <p>
                    <a href="tel:+918449506167" className="contact-link">
                      +91 84495 06167
                    </a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-details">
                  <h4>Send us your query anytime!</h4>
                  <p>
                    <a href="mailto:enquiry@corbettnatureretreat.com" className="contact-link">
                      enquiry@corbettnatureretreat.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Additional Info */}
              <div className="contact-features">
                <div className="feature-item">
                  <i className="fas fa-clock"></i>
                  <span>24/7 Support</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-reply"></i>
                  <span>Quick Response</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-heart"></i>
                  <span>Personalized Service</span>
                </div>
              </div>
            </div>
          </Col>

          {/* Contact Form */}
          <Col lg={7} className="mb-5">
            <div className="contact-form-container">
              <h2 className="section-title">Send Us a Message</h2>
              <p className="form-intro">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              {showAlert && (
                <Alert 
                  variant={alertType} 
                  onClose={() => setShowAlert(false)} 
                  dismissible
                  className="mb-4"
                >
                  {alertMessage}
                </Alert>
              )}

              <Form onSubmit={handleSubmit} className="contact-form">
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>Full Name *</Form.Label>
                      <Form.Control
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                        className="form-control-custom"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>Phone Number *</Form.Label>
                      <Form.Control
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        required
                        className="form-control-custom"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={12} className="mb-3">
                    <Form.Group>
                      <Form.Label>Email ID *</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email address"
                        required
                        className="form-control-custom"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={12} className="mb-4">
                    <Form.Group>
                      <Form.Label>Enter Message *</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your query or requirements..."
                        required
                        className="form-control-custom"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={12}>
                    <Button 
                      type="submit" 
                      className="submit-btn"
                      size="lg"
                    >
                      <i className="fas fa-paper-plane"></i> Send Message
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>

        {/* Map Section */}
        <Row className="map-section">
          <Col lg={12}>
            <div className="map-container">
              <h2 className="section-title text-center mb-4">Find Us</h2>
              <div className="map-embed">
                <iframe
                  title="Corbett Nature Retreat Location"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d16172.590593375404!2d79.189833!3d29.364505!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390a137430606e25%3A0xc5b27ad5761aaec4!2sCorbett%20Nature%20Retreat!5e1!3m2!1sen!2sin!4v1751749419759!5m2!1sen!2sin" 
                  width="100%"
                  height="400"
                  style={{ border: 0, borderRadius: '15px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="map-info">
                <div className="map-details">
                  <h4><i className="fas fa-map-marker-alt"></i> Our Location</h4>
                  <p>Village - Kyari, Ramnagar, Nainital, Uttarakhand - 244715</p>
                  <p>Near Jim Corbett National Park</p>
                  <a 
                    href="https://maps.app.goo.gl/pSNDN8tcKh9oyLs58" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="map-link"
                  >
                    <i className="fas fa-external-link-alt"></i> Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Element>
  );
};

export default Contact;