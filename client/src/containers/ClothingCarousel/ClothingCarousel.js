import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'

const ClothingCarousel = () => {


  const importAll = (r) => {
    return r.keys().map(r);
  }

  const images = importAll(require.context('../../images/clothing', false, /\.(png|jpe?g|svg)$/));

  const clothingLine = [
    {
      src: Node,
      className: 'back-end-dev',
      id: 'back-end-dev',
      title: 'Back End Development',
      text: 'Node.js (Node) is an open source development platform for executing JavaScript code server-side. It  is useful for developing applications that require a persistent connection from the browser to the server and is often used for real-time applications such as chat, news feeds and web push notifications.',
      alt: 'alt text'
    },
  ]


  const [catalog, setCatalog] = useState([])


  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="clothing-slide"
          src={ }
          id={ }
          alt={ }
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ClothingCarousel;