import React, {useState} from "react";
import Carousel from 'react-bootstrap/Carousel';
import Ariel from './testimonialCards/Ariel'
import Kirk from "./testimonialCards/Kirk"
import Jesse from './testimonialCards/Jesse'

function Testimonials() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <Ariel />
      </Carousel.Item>
      {/* <Carousel.Item>
      <Kirk />
      </Carousel.Item> */}
      <Carousel.Item>
      <Jesse />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Testimonials;
