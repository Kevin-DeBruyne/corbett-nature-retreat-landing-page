import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";

const navItems = [
  { to: "home", label: "Home" },
  { to: "about", label: "About Us" },
  { to: "accommodation", label: "Accommodation" },
  { to: "gallery", label: "Gallery" },
  { to: "activities", label: "Activities" },
  { to: "jimcorbett", label: "Jim Corbett" },
  { to: "contact", label: "Contact Us" },
];

const CustomNavbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Get all section elements
      const sections = document.querySelectorAll('.section');
      let currentSection = 0;
      let sectionStart = 0;
      let sectionEnd = 0;
      
      // Find current section
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + scrollPosition;
        const sectionBottom = sectionTop + rect.height;
        
        if (scrollPosition >= sectionTop - windowHeight * 0.1 && scrollPosition < sectionBottom) {
          currentSection = index;
          sectionStart = sectionTop;
          sectionEnd = sectionBottom;
          
          // Update active section based on current section
          const sectionId = section.getAttribute('id') || navItems[index]?.to || "home";
          setActiveSection(sectionId);
        }
      });
      
      // Calculate section progress (0 to 1)
      const sectionProgress = (scrollPosition - sectionStart) / (sectionEnd - sectionStart);
      
      // Show navbar at the beginning of each section (first 20% of section)
      if (sectionProgress <= 0.2 || scrollPosition === 0) {
        setIsVisible(true);
        setIsScrolled(scrollPosition > 0);
      } 
      // Hide navbar during the middle of the section (20% to 80%)
      else if (sectionProgress > 0.2 && sectionProgress < 0.8) {
        setIsVisible(false);
        setIsScrolled(true);
      }
      // Show navbar near the end of the section (last 20% of section)
      else {
        setIsVisible(true);
        setIsScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar 
      expand="lg" 
      fixed="top"
      className={`translucent-navbar ${isVisible ? 'navbar-visible' : 'navbar-hidden'} ${isScrolled ? 'navbar-scrolled' : ''}`}
    >
      <Navbar.Brand href="#home" className="navbar-brand-custom">Corbett Retreat</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {navItems.map(({ to, label }) => (
            <Nav.Link 
              as={Link} 
              key={to} 
              to={to} 
              spy={true} 
              smooth={true} 
              duration={500} 
              offset={-60}
              className={`nav-link-custom ${activeSection === to ? 'nav-link-active' : ''}`}
            >
              {label}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;