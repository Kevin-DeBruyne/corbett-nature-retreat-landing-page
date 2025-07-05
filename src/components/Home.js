import React from "react";
import { Element } from "react-scroll";
import { Carousel } from "react-bootstrap";

const Home = () => (
  <Element name="home" className="section full-width-section">
    <Carousel 
      slide 
      interval={2000} 
      className="carousel-wrapper smooth-carousel"
      indicators={true}
      controls={true}
    >
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${process.env.PUBLIC_URL}/images/IMG-20230210-WA0021.jpg`}
          alt="Image 4"
        />
        <Carousel.Caption>
          <h1>Image 4</h1>
          <p>Description for Image 4.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${process.env.PUBLIC_URL}/images/IMG-20231109-WA0015.jpg`}
          alt="Image 5"
        />
        <Carousel.Caption>
          <h1>Image 5</h1>
          <p>Description for Image 5.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${process.env.PUBLIC_URL}/images/IMG_20221025_172212.jpg`}
          alt="Image 6"
        />
        <Carousel.Caption>
          <h1>Image 6</h1>
          <p>Description for Image 6.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${process.env.PUBLIC_URL}/images/PXL_20230625_020240698.jpg`}
          alt="Image 7"
        />
        <Carousel.Caption>
          <h1>Image 7</h1>
          <p>Description for Image 7.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${process.env.PUBLIC_URL}/images/PXL_20231111_135243730.jpg`}
          alt="Image 8"
        />
        <Carousel.Caption>
          <h1>Image 8</h1>
          <p>Description for Image 8.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${process.env.PUBLIC_URL}/images/night.jpg`}
          alt="Image 10"
        />
        <Carousel.Caption>
          <h1>Image 10</h1>
          <p>Description for Image 10.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${process.env.PUBLIC_URL}/images/night2.jpg`}
          alt="Image 11"
        />
        <Carousel.Caption>
          <h1>Image 11</h1>
          <p>Description for Image 11.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${process.env.PUBLIC_URL}/images/scape.jpg`}
          alt="Image 12"
        />
        <Carousel.Caption>
          <h1>Image 12</h1>
          <p>Description for Image 12.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </Element>
);
export default Home;