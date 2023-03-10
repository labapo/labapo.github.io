import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Jeopardy from "../images/Jeopardy.png";
import memories from "../images/memories.png";
import Placeholder from "../images/Placeholder.png";
import Button from "react-bootstrap/Button";

function Portfolio() {
  return (
    <Carousel>
      <Carousel.Item>
        <a href="https://jeopardy-6nfr.onrender.com">
          <img className="d-block w-100" src={Jeopardy} alt="First slide" />
        </a>
        <Carousel.Caption>
          <h4 className="caption-text">Jeopardy</h4>
          <Button variant="primary" href="https://github.com/labapo/jeopardy-game">
          GitHub
        </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <a href="https://memories-app-nia4.onrender.com">
          <img className="d-block w-100" src={memories} alt="Second slide" />
        </a>
        <Carousel.Caption>
          <h4 className="caption-text">Memories App</h4>
          <Button variant="primary" href="https://github.com/labapo/memories">
          GitHub
        </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Placeholder} alt="Third slide" />

        <Carousel.Caption>
          <h4 className="caption-text">Social Contact Book</h4>
          <p>
          <Button className="primary" variant="primary" href="https://github.com/labapo/mern-app-final-project">
          GitHub
        </Button>
        </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Portfolio;
