import React from "react";
import { Element } from "react-scroll";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";

const Accommodation = () => (
  <Element name="accommodation" className="section accommodation-section">
    {/* Hero Section */}
    <div className="accommodation-hero">
      <div className="hero-overlay">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <h1 className="hero-title">Accommodation at Corbett Nature Retreat</h1>
              <p className="hero-subtitle">
                A premium stay in the lap of nature and wildlife around
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>

    {/* Main Content */}
    <Container className="accommodation-content">
      {/* Introduction Section */}
      <Row className="intro-section">
        <Col lg={12} className="text-center mb-5">
          <h2 className="section-title">Your Perfect Wilderness Home</h2>
          <p className="intro-text">
            This is an amazing place to enjoy your vacation with your family, friends and loved ones. 
            With approximately 7 tents the property is a unique place to spend time in.
          </p>
        </Col>
      </Row>

      {/* Tent Category Section */}
      <Row className="tent-category-section">
        <Col lg={12} className="mb-5">
          <h2 className="section-title">Tent Category @ Corbett Nature Retreat</h2>
        </Col>
        <Col lg={6} className="mb-5">
          <Card className="tent-card">
            <Card.Img 
              variant="top" 
              src="/images/IMG-20230210-WA0021.jpg" 
              alt="Premium Tent"
              className="tent-image"
            />
            <Card.Body>
              <Card.Title className="tent-title">
                <Badge bg="primary" className="tent-badge">Premium</Badge>
                Premium Tents
              </Card.Title>
              <div className="tent-features">
                <div className="feature-item">
                  <i className="fas fa-users"></i>
                  <span><strong>Occupancy:</strong> 2 adults + 2 children below 12 years of age, or 3 adults</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-utensils"></i>
                  <span><strong>24-hour in-room dining</strong></span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-wifi"></i>
                  <span><strong>Hi-speed internet connectivity</strong></span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-child"></i>
                  <span><strong>Complimentary access to recreational area and kids zone</strong></span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-tv"></i>
                  <span><strong>32-inch LCD television</strong></span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-coffee"></i>
                  <span><strong>Tea & Coffee maker</strong></span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} className="mb-5">
          <div className="tent-gallery">
            <Row>
              <Col md={6} className="mb-3">
                <div className="gallery-item">
                  <img 
                    src="/images/IMG-20231109-WA0015.jpg" 
                    alt="Tent Interior" 
                    className="gallery-image"
                  />
                  <div className="gallery-overlay">
                    <span>Tent Interior</span>
                  </div>
                </div>
              </Col>
              <Col md={6} className="mb-3">
                <div className="gallery-item">
                  <img 
                    src="/images/PXL_20231111_135243730.jpg" 
                    alt="Tent Exterior" 
                    className="gallery-image"
                  />
                  <div className="gallery-overlay">
                    <span>Tent Exterior</span>
                  </div>
                </div>
              </Col>
              <Col md={6} className="mb-3">
                <div className="gallery-item">
                  <img 
                    src="/images/night.jpg" 
                    alt="Night View" 
                    className="gallery-image"
                  />
                  <div className="gallery-overlay">
                    <span>Night View</span>
                  </div>
                </div>
              </Col>
              <Col md={6} className="mb-3">
                <div className="gallery-item">
                  <img 
                    src="/images/night2.jpg" 
                    alt="Evening Ambiance" 
                    className="gallery-image"
                  />
                  <div className="gallery-overlay">
                    <span>Evening Ambiance</span>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

      {/* Amenities Section */}
      <Row className="amenities-section">
        <Col lg={12} className="text-center mb-5">
          <h2 className="section-title">Premium Amenities</h2>
        </Col>
        <Col md={4} className="mb-4">
          <div className="amenity-card">
            <div className="amenity-icon">
              <i className="fas fa-bed"></i>
            </div>
            <h4>Comfortable Beds</h4>
            <p>Queen-size beds with premium bedding for a restful night's sleep in the wilderness.</p>
          </div>
        </Col>
        <Col md={4} className="mb-4">
          <div className="amenity-card">
            <div className="amenity-icon">
              <i className="fas fa-shower"></i>
            </div>
            <h4>En-suite Bathrooms</h4>
            <p>Private bathrooms with hot water facilities, ensuring your comfort in the wild.</p>
          </div>
        </Col>
        <Col md={4} className="mb-4">
          <div className="amenity-card">
            <div className="amenity-icon">
              <i className="fas fa-wifi"></i>
            </div>
            <h4>High-Speed Internet</h4>
            <p>Stay connected with complimentary high-speed WiFi throughout your stay.</p>
          </div>
        </Col>
      </Row>

      {/* Experience Section */}
      <Row className="experience-section">
        <Col lg={6} className="mb-5">
          <div className="experience-content">
            <h2 className="section-title">Wilderness Experience</h2>
            <p className="experience-text">
              Wake up to the sounds of nature, enjoy your morning tea with breathtaking views, 
              and experience the perfect blend of luxury and wilderness. Our premium tents offer 
              all modern comforts while keeping you close to nature.
            </p>
            <div className="experience-highlights">
              <div className="highlight-item">
                <i className="fas fa-mountain"></i>
                <span>Panoramic Views</span>
              </div>
              <div className="highlight-item">
                <i className="fas fa-leaf"></i>
                <span>Nature Immersion</span>
              </div>
              <div className="highlight-item">
                <i className="fas fa-star"></i>
                <span>Premium Comfort</span>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={6} className="mb-5">
          <div className="experience-image">
            <img 
              src="/images/scape.jpg" 
              alt="Wilderness Experience" 
              className="experience-img"
            />
          </div>
        </Col>
      </Row>
    </Container>
  </Element>
);

export default Accommodation;