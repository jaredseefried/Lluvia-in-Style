import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

const CarouselItem = (props) => {
  return (
    <Carousel.Item interval={1000}>
      <img
        className="clothing-slide"
        src={props.src}
        id={props.id}
        alt={props.alt}
      />
    </Carousel.Item>
  );
}

export default CarouselItem;