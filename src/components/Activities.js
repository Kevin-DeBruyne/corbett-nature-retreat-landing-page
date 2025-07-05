import React, { useState } from "react";
import { Element } from "react-scroll";
import { Container, Row, Col, Card } from "react-bootstrap";

const activities = [
  {
    id: 1,
    title: "Board Games",
    description: "Enjoy classic board games in the comfort of your tent or common area. Perfect for family bonding and friendly competition.",
    icon: "fas fa-chess",
    image: `${process.env.PUBLIC_URL}/images/IMG-20230210-WA0010.jpg`,
    category: "Indoor"
  },
  {
    id: 2,
    title: "Nature & River Walk",
    description: "Guided walks along the pristine river and through the beautiful nature trails surrounding our retreat.",
    icon: "fas fa-water",
    image: `${process.env.PUBLIC_URL}/images/river.jpg`,
    category: "Outdoor"
  },
  {
    id: 3,
    title: "Hiking",
    description: "Explore the nearby hills with guided hiking trails offering breathtaking views of the Corbett landscape.",
    icon: "fas fa-mountain",
    image: `${process.env.PUBLIC_URL}/images/hiking.jpg`,
    category: "Adventure"
  },
  {
    id: 4,
    title: "Stargazing",
    description: "Experience the magical night sky away from city lights. Perfect for astronomy enthusiasts and romantic evenings.",
    icon: "fas fa-star",
    image: `${process.env.PUBLIC_URL}/images/stargazing.jpg`,
    category: "Evening"
  },
  {
    id: 5,
    title: "Bird Watching",
    description: "Observe diverse bird species in their natural habitat. Our location offers excellent birding opportunities.",
    icon: "fas fa-dove",
    image: `${process.env.PUBLIC_URL}/images/nature.jpg`,
    category: "Wildlife"
  },
  {
    id: 6,
    title: "Evening Bonfire",
    description: "Gather around the bonfire for storytelling, music, and warm conversations under the starlit sky.",
    icon: "fas fa-fire",
    image: `${process.env.PUBLIC_URL}/images/bonfire.jpg`,
    category: "Evening"
  }
];

const Activities = () => {
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
    <Element name="activities" className="section activities-section">
      {/* Hero Section */}
      <div className="activities-hero">
        <div className="hero-overlay">
          <Container>
            <Row className="justify-content-center">
              <Col lg={8} className="text-center">
                <h1 className="hero-title">Activities & Experiences</h1>
                <p className="hero-subtitle">
                  Discover the perfect blend of adventure and relaxation
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      {/* Main Content */}
      <Container className="activities-content">
        {/* Introduction */}
        <Row className="intro-section">
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title">What You Can Experience</h2>
            <p className="intro-text">
              From thrilling outdoor adventures to peaceful indoor activities, 
              Corbett Nature Retreat offers a diverse range of experiences 
              that cater to every type of traveler.
            </p>
          </Col>
        </Row>

        {/* Activities Grid */}
        <Row className="activities-grid">
          {activities.map((activity) => (
            <Col lg={4} md={6} className="mb-4" key={activity.id}>
              <Card className="activity-card">
                <div className="activity-image-container">
                  <Card.Img 
                    variant="top" 
                    src={activity.image} 
                    alt={activity.title}
                    className="activity-image"
                  />
                  <div className="activity-overlay">
                    <div className="activity-icon">
                      <i className={activity.icon}></i>
                    </div>
                    <span className="activity-category">{activity.category}</span>
                    <button 
                      className="view-full-btn"
                      onClick={() => openLightbox(activity.image, activity.title)}
                    >
                      <i className="fas fa-expand"></i> View Full
                    </button>
                  </div>
                </div>
                <Card.Body className="activity-card-body">
                  <Card.Title className="activity-title">{activity.title}</Card.Title>
                  <Card.Text className="activity-description">
                    {activity.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Activity Categories */}
        <Row className="categories-section">
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title">Activity Categories</h2>
          </Col>
          <Col md={3} className="mb-4">
            <div className="category-highlight">
              <div className="category-icon-large">
                <i className="fas fa-mountain"></i>
              </div>
              <h4>Adventure</h4>
              <p>Thrilling outdoor activities for adventure seekers</p>
            </div>
          </Col>
          <Col md={3} className="mb-4">
            <div className="category-highlight">
              <div className="category-icon-large">
                <i className="fas fa-leaf"></i>
              </div>
              <h4>Nature</h4>
              <p>Peaceful walks and wildlife observation</p>
            </div>
          </Col>
          <Col md={3} className="mb-4">
            <div className="category-highlight">
              <div className="category-icon-large">
                <i className="fas fa-moon"></i>
              </div>
              <h4>Evening</h4>
              <p>Magical experiences under the stars</p>
            </div>
          </Col>
          <Col md={3} className="mb-4">
            <div className="category-highlight">
              <div className="category-icon-large">
                <i className="fas fa-home"></i>
              </div>
              <h4>Indoor</h4>
              <p>Comfortable activities for relaxation</p>
            </div>
          </Col>
        </Row>

        {/* Featured Activity - River Walk */}
        <Row className="featured-activity">
          <Col lg={6} className="mb-5">
            <div className="featured-content">
              <h2 className="section-title">Featured: River Walk Experience</h2>
              <p className="featured-text">
                Embark on a guided nature walk along the pristine river that flows 
                near our retreat. This peaceful activity allows you to connect with 
                nature while learning about the local ecosystem and wildlife.
              </p>
              <div className="featured-highlights">
                <div className="highlight-item">
                  <i className="fas fa-clock"></i>
                  <span>Duration: 1-2 hours</span>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-users"></i>
                  <span>Group size: 2-8 people</span>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-calendar"></i>
                  <span>Available: All seasons</span>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6} className="mb-5">
            <div className="featured-image">
              <img 
                src={`${process.env.PUBLIC_URL}/images/river2.jpg`}
                alt="River Walk Experience" 
                className="featured-img"
                onClick={() => openLightbox(`${process.env.PUBLIC_URL}/images/river2.jpg`, "River Walk Experience")}
                style={{ cursor: 'pointer' }}
              />
              <div className="featured-overlay">
                <button 
                  className="view-full-btn"
                  onClick={() => openLightbox(`${process.env.PUBLIC_URL}/images/river2.jpg`, "River Walk Experience")}
                >
                  <i className="fas fa-expand"></i> View Full
                </button>
              </div>
            </div>
          </Col>
        </Row>

        {/* Activity Schedule */}
        <Row className="schedule-section">
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title">Daily Activity Schedule</h2>
          </Col>
          <Col md={6} className="mb-4">
            <div className="schedule-card">
              <h4><i className="fas fa-sun"></i> Morning Activities</h4>
              <ul className="schedule-list">
                <li>Bird Watching (6:00 AM - 8:00 AM)</li>
                <li>Nature Walk (8:30 AM - 10:30 AM)</li>
                <li>River Walk (11:00 AM - 12:30 PM)</li>
              </ul>
            </div>
          </Col>
          <Col md={6} className="mb-4">
            <div className="schedule-card">
              <h4><i className="fas fa-moon"></i> Evening Activities</h4>
              <ul className="schedule-list">
                <li>Hiking (4:00 PM - 6:00 PM)</li>
                <li>Stargazing (7:00 PM - 9:00 PM)</li>
                <li>Evening Bonfire (8:00 PM - 10:00 PM)</li>
              </ul>
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

export default Activities;