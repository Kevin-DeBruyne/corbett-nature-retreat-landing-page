import React, { useState } from "react";
import { Element } from "react-scroll";
import { Container, Row, Col, Card } from "react-bootstrap";

const attractions = [
  {
    id: 1,
    title: "Jeep Safari",
    description: "Experience the thrill of wildlife safari in Jim Corbett National Park. Spot tigers, elephants, and diverse wildlife in their natural habitat.",
    icon: "fas fa-car",
    image: `${process.env.PUBLIC_URL}/images/jeep-safari.jpg`,
    category: "Wildlife",
    distance: "20 km"
  },
  {
    id: 2,
    title: "Camel Ride",
    description: "Enjoy a unique camel ride experience through the scenic landscapes around Corbett. Perfect for family fun and photography.",
    icon: "fas fa-horse",
    image: `${process.env.PUBLIC_URL}/images/camel-ride.jpg`,
    category: "Adventure",
    distance: "5 km"
  },
  {
    id: 3,
    title: "Waterfall Visit",
    description: "Discover beautiful waterfalls in the nearby hills. A perfect spot for nature photography and peaceful moments.",
    icon: "fas fa-water",
    image: `${process.env.PUBLIC_URL}/images/water-fall.jpg`,
    category: "Nature",
    distance: "15 km"
  },
  {
    id: 4,
    title: "Hanumandham",
    description: "Visit the sacred Hanuman temple nestled in the hills. Experience spiritual peace and breathtaking views.",
    icon: "fas fa-om",
    image: `${process.env.PUBLIC_URL}/images/hanumandham.jpg`,
    category: "Spiritual",
    distance: "25 km"
  },
  {
    id: 5,
    title: "Garjiya Temple",
    description: "Explore the ancient Garjiya Devi temple on the banks of Kosi River. A significant religious and cultural site.",
    icon: "fas fa-temple-buddhist",
    image: `${process.env.PUBLIC_URL}/images/garjiya-temple.jpg`,
    category: "Spiritual",
    distance: "18 km"
  },
  {
    id: 6,
    title: "Masai Mara",
    description: "Experience the African safari feel at Masai Mara themed resort. Enjoy luxury accommodation and wildlife viewing.",
    icon: "fas fa-safari",
    image: `${process.env.PUBLIC_URL}/images/masai-mara.jpg`,
    category: "Luxury",
    distance: "30 km"
  }
];

const JimCorbett = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openLightbox = (imageSrc, title) => {
    setCurrentImage({ src: imageSrc, title });
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage(null);
  };

  return (
    <Element name="jimcorbett" className="section jimcorbett-section">
      {/* Hero Section */}
      <div className="jimcorbett-hero">
        <div className="hero-overlay">
          <Container>
            <Row className="justify-content-center">
              <Col lg={8} className="text-center">
                <h1 className="hero-title">Jim Corbett & Nearby Attractions</h1>
                <p className="hero-subtitle">
                  Explore the wilderness and discover amazing places around Corbett
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      {/* Main Content */}
      <Container className="jimcorbett-content">
        {/* Introduction */}
        <Row className="intro-section">
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title">Discover the Region</h2>
            <p className="intro-text">
              Jim Corbett National Park, just 20 km from our camp, is India's oldest national park 
              and a haven for Bengal tigers, elephants, and over 600 bird species. Beyond the park, 
              discover amazing attractions that make this region truly special.
            </p>
          </Col>
        </Row>

        {/* Attractions Grid */}
        <Row className="attractions-grid">
          {attractions.map((attraction) => (
            <Col lg={4} md={6} className="mb-4" key={attraction.id}>
              <Card className="attraction-card">
                <div className="attraction-image-container">
                  <Card.Img 
                    variant="top" 
                    src={attraction.image} 
                    alt={attraction.title}
                    className="attraction-image"
                  />
                  <div className="attraction-overlay">
                    <div className="attraction-icon">
                      <i className={attraction.icon}></i>
                    </div>
                    <span className="attraction-category">{attraction.category}</span>
                    <span className="attraction-distance">{attraction.distance}</span>
                    <button 
                      className="view-full-btn"
                      onClick={() => openLightbox(attraction.image, attraction.title)}
                    >
                      <i className="fas fa-expand"></i> View Full
                    </button>
                  </div>
                </div>
                <Card.Body className="attraction-card-body">
                  <Card.Title className="attraction-title">{attraction.title}</Card.Title>
                  <Card.Text className="attraction-description">
                    {attraction.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Categories Section */}
        <Row className="categories-section">
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title">Attraction Categories</h2>
          </Col>
          <Col md={3} className="mb-4">
            <div className="category-highlight">
              <div className="category-icon-large">
                <i className="fas fa-paw"></i>
              </div>
              <h4>Wildlife</h4>
              <p>Jeep safaris and wildlife encounters</p>
            </div>
          </Col>
          <Col md={3} className="mb-4">
            <div className="category-highlight">
              <div className="category-icon-large">
                <i className="fas fa-mountain"></i>
              </div>
              <h4>Adventure</h4>
              <p>Thrilling activities and experiences</p>
            </div>
          </Col>
          <Col md={3} className="mb-4">
            <div className="category-highlight">
              <div className="category-icon-large">
                <i className="fas fa-om"></i>
              </div>
              <h4>Spiritual</h4>
              <p>Sacred temples and religious sites</p>
            </div>
          </Col>
          <Col md={3} className="mb-4">
            <div className="category-highlight">
              <div className="category-icon-large">
                <i className="fas fa-star"></i>
              </div>
              <h4>Luxury</h4>
              <p>Premium experiences and accommodations</p>
            </div>
          </Col>
        </Row>

        {/* Jim Corbett Park Info */}
        <Row className="park-info-section">
          <Col lg={6} className="mb-5">
            <div className="park-content">
              <h2 className="section-title">Jim Corbett National Park</h2>
              <p className="park-text">
                Established in 1936, Jim Corbett National Park is India's first national park 
                and a UNESCO World Heritage Site. The park spans over 520 square kilometers 
                and is home to the majestic Bengal tiger, Asian elephants, and over 600 species 
                of birds.
              </p>
              <div className="park-highlights">
                <div className="highlight-item">
                  <i className="fas fa-calendar"></i>
                  <span>Best Time: November to June</span>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-clock"></i>
                  <span>Safari Duration: 3-4 hours</span>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-users"></i>
                  <span>Group Size: 6 people per jeep</span>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6} className="mb-5">
            <div className="park-image">
              <img 
                src={`${process.env.PUBLIC_URL}/images/IMG-20230210-WA0021.jpg`}
                alt="Jim Corbett National Park" 
                className="park-img"
                onClick={() => openLightbox(`${process.env.PUBLIC_URL}/images/IMG-20230210-WA0021.jpg`, "Jim Corbett National Park")}
                style={{ cursor: 'pointer' }}
              />
              <div className="park-overlay">
                <button 
                  className="view-full-btn"
                  onClick={() => openLightbox(`${process.env.PUBLIC_URL}/images/IMG-20230210-WA0021.jpg`, "Jim Corbett National Park")}
                >
                  <i className="fas fa-expand"></i> View Full
                </button>
              </div>
            </div>
          </Col>
        </Row>

        {/* Safari Booking Info */}
        <Row className="booking-section">
          <Col lg={12} className="text-center">
            <div className="booking-card">
              <h3>Safari Bookings</h3>
              <p>
                Safari bookings can be arranged on request. We help our guests book 
                the best safari slots and ensure a memorable wildlife experience. 
                Contact us for more details and availability.
              </p>
              <div className="booking-features">
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Guided Safari Tours</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Transportation Arrangement</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Expert Wildlife Guides</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Full Screen Lightbox */}
      {lightboxOpen && currentImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              <i className="fas fa-times"></i>
            </button>
            
            <div className="lightbox-image-container">
              <img 
                src={currentImage.src} 
                alt={currentImage.title}
                className="lightbox-image"
              />
              <div className="lightbox-caption">
                <span>{currentImage.title}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </Element>
  );
};

export default JimCorbett;