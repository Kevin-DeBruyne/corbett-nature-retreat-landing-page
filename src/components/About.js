import React from "react";
import { Element } from "react-scroll";
import { Container, Row, Col, Card } from "react-bootstrap";

const About = () => (
  <Element name="about" className="section about-section">
    {/* Hero Section */}
    <div className="about-hero">
      <div className="hero-overlay">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <h1 className="hero-title">About Corbett Nature Retreat</h1>
              <p className="hero-subtitle">
                A Premium Tents Property in Jim Corbett
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>

    {/* Main Content */}
    <Container className="about-content">
      {/* Story Section */}
      <Row className="story-section">
        <Col lg={6} className="mb-5">
          <div className="story-content">
            <h2 className="section-title">Our Retreat</h2>
            <p className="story-text">
              We are Jungle Safari tents in the lap of Corbett Tiger Reserve in Kyari. 
              Our effort is to connect you to nature without hindering it in any way. 
              Responsible tourism is our priority.
            </p>
            <p className="story-text">
              Our large luxury safari tents are one bedroom and have all the modern 
              conveniences, including full en-suite bathrooms, Kettle for coffee and tea. 
              It also offers a sit out verandah giving you the perfect setting to view the river.
            </p>
            <p className="story-text">
              Tents are spacious and comfortable. The dimension of the safari tents including 
              the inbuilt WC bathroom and shower area is 13 feet x 16 feet. The bathrooms 
              are equipped with hot water.
            </p>
          </div>
        </Col>
        <Col lg={6} className="mb-5">
          <div className="story-image">
            <div className="image-placeholder">
              <i className="fas fa-campground"></i>
              <p>Luxury Safari Tents</p>
            </div>
          </div>
        </Col>
      </Row>

      {/* Stats Section */}
      <Row className="stats-section">
        <Col md={3} className="text-center mb-4">
          <div className="stat-card">
            <div className="stat-number">13'</div>
            <div className="stat-label">Tent Width</div>
          </div>
        </Col>
        <Col md={3} className="text-center mb-4">
          <div className="stat-card">
            <div className="stat-number">16'</div>
            <div className="stat-label">Tent Length</div>
          </div>
        </Col>
        <Col md={3} className="text-center mb-4">
          <div className="stat-card">
            <div className="stat-number">1</div>
            <div className="stat-label">Bedroom</div>
          </div>
        </Col>
        <Col md={3} className="text-center mb-4">
          <div className="stat-card">
            <div className="stat-number">100%</div>
            <div className="stat-label">En-suite</div>
          </div>
        </Col>
      </Row>

      {/* Features Section */}
      <Row className="features-section">
        <Col lg={12} className="text-center mb-5">
          <h2 className="section-title">What Makes Us Special</h2>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="feature-card">
            <Card.Body className="text-center">
              <div className="feature-icon">
                <i className="fas fa-campground"></i>
              </div>
              <Card.Title>Luxury Safari Tents</Card.Title>
              <Card.Text>
                Spacious 13' x 16' tents with modern amenities, en-suite bathrooms, 
                and comfortable bedding for the perfect wilderness experience.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="feature-card">
            <Card.Body className="text-center">
              <div className="feature-icon">
                <i className="fas fa-coffee"></i>
              </div>
              <Card.Title>Tea & Coffee</Card.Title>
              <Card.Text>
                Each tent comes with a kettle for your morning tea and coffee, 
                allowing you to enjoy hot beverages in the comfort of your tent.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="feature-card">
            <Card.Body className="text-center">
              <div className="feature-icon">
                <i className="fas fa-water"></i>
              </div>
              <Card.Title>Hot Water</Card.Title>
              <Card.Text>
                En-suite bathrooms equipped with hot water facilities, 
                ensuring your comfort even in the wilderness.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Family Story Section */}
      <Row className="family-section">
        <Col lg={6} className="mb-5">
          <div className="family-image">
            <div className="image-placeholder">
              <i className="fas fa-user-tie"></i>
              <p>Bipin Chandra Upadhyay</p>
            </div>
          </div>
        </Col>
        <Col lg={6} className="mb-5">
          <div className="family-content">
            <h2 className="section-title">The History behind the Corbett Nature Retreat</h2>
            <p className="family-text">
              I am Bipin Chandra Upadhyay, from Kyari village, nestled in the Pawalgarh 
              Conservation Reserve of Corbett National Park, in Nainital District of Uttarakhand. 
              We are surrounded by jungle all around.
            </p>
            <p className="family-text">
              I got enrolled in the Indian army in the infantry division at the age of 20 in 1995. 
              After a year of rigorous training, I was posted to 17 Kumaon, under the Kumaon regiment 
              at Pooh, Himachal Pradesh.
            </p>
            <p className="family-text">
              I retired from the army in December 2019 and joined Tiger Protection force in Kalagarh 
              range of Corbett Tiger Reserve. Unfortunately, due to some family circumstances, I had 
              to leave the job. Soon enough, Covid 19 pandemic took over the entire country and we 
              were left to figure out how to make a living and fend for the family.
            </p>
            <div className="family-values">
              <div className="value-item">
                <i className="fas fa-heart"></i>
                <span>Responsible Tourism</span>
              </div>
              <div className="value-item">
                <i className="fas fa-handshake"></i>
                <span>Local Employment</span>
              </div>
              <div className="value-item">
                <i className="fas fa-seedling"></i>
                <span>Nature Conservation</span>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      {/* Location Section */}
      <Row className="location-section">
        <Col lg={12} className="text-center mb-5">
          <h2 className="section-title">Our Village & Mission</h2>
          <p className="location-text">
            In our own village, my younger brothers Naveen and Shekhar had developed their 
            eco-friendly, community owned, mudhouses in the name of Camp Hornbill. They had 
            been successfully running this venture, empowering the young of Kumaon hill for 
            the past 12 years, with nature at their heart.
          </p>
        </Col>
        <Col md={6} className="mb-4">
          <div className="location-card">
            <h4><i className="fas fa-map-marker-alt"></i> Kyari Village</h4>
            <p>Nestled in the Pawalgarh Conservation Reserve of Corbett National Park, surrounded by jungle all around, providing the perfect wilderness experience.</p>
          </div>
        </Col>
        <Col md={6} className="mb-4">
          <div className="location-card">
            <h4><i className="fas fa-users"></i> Community Focus</h4>
            <p>Preserving our beautiful village Kyari along with providing employment to our local brothers and sisters and being in sync with our natural surroundings.</p>
          </div>
        </Col>
      </Row>

      {/* Message Section */}
      <Row className="message-section">
        <Col lg={12} className="text-center">
          <div className="message-card">
            <h3>Our Humble Request</h3>
            <p>
              Our humble prayer to the guests is to enjoy nature in its full glory, 
              without hindering its calm and silence. Kindly avoid loud music. 
              Let the animals and birds be there to witness your peace.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  </Element>
);

export default About;