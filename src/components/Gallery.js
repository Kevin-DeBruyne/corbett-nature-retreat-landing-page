import React, { useState } from "react";
import { Element } from "react-scroll";
import { Container, Row, Col } from "react-bootstrap";

const images = [
  `${process.env.PUBLIC_URL}/images/IMG_20221025_172212.jpg`,
  `${process.env.PUBLIC_URL}/images/IMG-20230210-WA0021.jpg`,
  `${process.env.PUBLIC_URL}/images/IMG-20230210-WA0010.jpg`,
  `${process.env.PUBLIC_URL}/images/PXL_20230625_020240698.jpg`,
  `${process.env.PUBLIC_URL}/images/IMG-20231109-WA0015.jpg`,
  `${process.env.PUBLIC_URL}/images/PXL_20231111_135243730.jpg`,
  `${process.env.PUBLIC_URL}/images/scape.jpg`,
  `${process.env.PUBLIC_URL}/images/night2.jpg`,
  `${process.env.PUBLIC_URL}/images/night.jpg`
];

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowRight') {
      nextImage();
    } else if (e.key === 'ArrowLeft') {
      prevImage();
    }
  };

  return (
    <Element name="gallery" className="section gallery-section">
      {/* Hero Section */}
      <div className="gallery-hero">
        <div className="hero-overlay">
          <Container>
            <Row className="justify-content-center">
              <Col lg={8} className="text-center">
                <h1 className="hero-title">Picture Gallery</h1>
                <p className="hero-subtitle">
                  Experience the beauty of Corbett Nature Retreat through our lens
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      {/* Ticker Gallery */}
      <div className="ticker-container">
        <div className="ticker-wrapper">
          <div className="ticker-track">
            {/* First set of images */}
            {images.map((src, idx) => (
              <div 
                key={`first-${idx}`} 
                className="ticker-item"
                onClick={() => openLightbox(idx)}
                style={{ cursor: 'pointer' }}
              >
                <img src={src} alt={`Gallery image ${idx + 1}`} />
                <div className="ticker-overlay">
                  <span>Corbett Nature Retreat</span>
                  <div className="click-hint">
                    <i className="fas fa-expand"></i> Click to view
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {images.map((src, idx) => (
              <div 
                key={`second-${idx}`} 
                className="ticker-item"
                onClick={() => openLightbox(idx)}
                style={{ cursor: 'pointer' }}
              >
                <img src={src} alt={`Gallery image ${idx + 1}`} />
                <div className="ticker-overlay">
                  <span>Corbett Nature Retreat</span>
                  <div className="click-hint">
                    <i className="fas fa-expand"></i> Click to view
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Categories */}
      <Container className="gallery-content">
        <Row className="gallery-categories">
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title">Gallery Categories</h2>
          </Col>
          <Col md={4} className="mb-4">
            <div className="category-card">
              <div className="category-icon">
                <i className="fas fa-campground"></i>
              </div>
              <h4>Tent Views</h4>
              <p>Luxury safari tents in the wilderness</p>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="category-card">
              <div className="category-icon">
                <i className="fas fa-mountain"></i>
              </div>
              <h4>Nature Scapes</h4>
              <p>Breathtaking views of Corbett landscape</p>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="category-card">
              <div className="category-icon">
                <i className="fas fa-moon"></i>
              </div>
              <h4>Night Ambiance</h4>
              <p>Magical evenings under the stars</p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Full Screen Lightbox */}
      {lightboxOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              <i className="fas fa-times"></i>
            </button>
            
            <button className="lightbox-nav lightbox-prev" onClick={prevImage}>
              <i className="fas fa-chevron-left"></i>
            </button>
            
            <div className="lightbox-image-container">
              <img 
                src={images[currentImageIndex]} 
                alt={`Gallery image ${currentImageIndex + 1}`}
                className="lightbox-image"
              />
              <div className="lightbox-caption">
                <span>Image {currentImageIndex + 1} of {images.length}</span>
              </div>
            </div>
            
            <button className="lightbox-nav lightbox-next" onClick={nextImage}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      )}
    </Element>
  );
};

export default Gallery;