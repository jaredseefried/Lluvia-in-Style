import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/esm/Container';
import './ClothingCarousel.css'

const ClothingCarousel = () => {

  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
  }

  const images = importAll(require.context("../../images/clothing", true, /\.(png|jpe?g|svg)$/));

  return (
    <Container>
      <Carousel>
        <Carousel.Item>
          <img
            className="clothing image"
            src={images['lluvia-in-style-1.jpeg'].default}
            alt="Lluvia in Style Children's Boutique Clothing Line"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="clothing image"
            src={images['lluvia-in-style-2.jpeg'].default}
            alt="Lluvia in Style Children's Boutique Clothing Line"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="clothing image"
            src={images['lluvia-in-style-3.jpeg'].default}
            alt="Lluvia in Style Children's Boutique Clothing Line"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="clothing image"
            src={images['lluvia-in-style-4.jpeg'].default}
            alt="Lluvia in Style Children's Boutique Clothing Line"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="clothing image"
            src={images['lluvia-in-style-5.jpeg'].default}
            alt="Lluvia in Style Children's Boutique Clothing Line"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="clothing image"
            src={images['lluvia-in-style-6.jpeg'].default}
            alt="Lluvia in Style Children's Boutique Clothing Line"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="clothing image"
            src={images['lluvia-in-style-7.jpeg'].default}
            alt="Lluvia in Style Children's Boutique Clothing Line"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="clothing image"
            src={images['lluvia-in-style-8.jpeg'].default}
            alt="Lluvia in Style Children's Boutique Clothing Line"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="clothing image"
            src={images['lluvia-in-style-9.jpeg'].default}
            alt="Lluvia in Style Children's Boutique Clothing Line"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="clothing image"
            src={images['lluvia-in-style-10.jpeg'].default}
            alt="Lluvia in Style Children's Boutique Clothing Line"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="clothing image"
            src={images['lluvia-in-style-11.jpeg'].default}
            alt="Lluvia in Style Children's Boutique Clothing Line"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="clothing image"
            src={images['lluvia-in-style-12.jpeg'].default}
            alt="Lluvia in Style Children's Boutique Clothing Line"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="clothing image"
            src={images['lluvia-in-style-13.jpeg'].default}
            alt="Lluvia in Style Children's Boutique Clothing Line"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="clothing image"
            src={images['lluvia-in-style-14.jpeg'].default}
            alt="Lluvia in Style Children's Boutique Clothing Line"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="clothing image"
            src={images['lluvia-in-style-15.jpeg'].default}
            alt="Lluvia in Style Children's Boutique Clothing Line"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="clothing image"
            src={images['lluvia-in-style-16.jpeg'].default}
            alt="Lluvia in Style Children's Boutique Clothing Line"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="clothing image"
            src={images['lluvia-in-style-17.jpeg'].default}
            alt="Lluvia in Style Children's Boutique Clothing Line"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="clothing image"
            src={images['lluvia-in-style-18.jpeg'].default}
            alt="Lluvia in Style Children's Boutique Clothing Line"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="clothing image"
            src={images['lluvia-in-style-19.jpeg'].default}
            alt="Lluvia in Style Children's Boutique Clothing Line"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="clothing image"
            src={images['lluvia-in-style-20.jpeg'].default}
            alt="Lluvia in Style Children's Boutique Clothing Line"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="clothing image"
            src={images['lluvia-in-style-21.jpeg'].default}
            alt="Lluvia in Style Children's Boutique Clothing Line"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="clothing image"
            src={images['lluvia-in-style-22.jpeg'].default}
            alt="Lluvia in Style Children's Boutique Clothing Line"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="clothing image"
            src={images['lluvia-in-style-23.jpeg'].default}
            alt="Lluvia in Style Children's Boutique Clothing Line"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="clothing image"
            src={images['lluvia-in-style-24.jpeg'].default}
            alt="Lluvia in Style Children's Boutique Clothing Line"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="clothing image"
            src={images['lluvia-in-style-25.jpeg'].default}
            alt="Lluvia in Style Children's Boutique Clothing Line"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="clothing image"
            src={images['lluvia-in-style-26.jpeg'].default}
            alt="Lluvia in Style Children's Boutique Clothing Line"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="clothing image"
            src={images['lluvia-in-style-27.jpeg'].default}
            alt="Lluvia in Style Children's Boutique Clothing Line"
          />
        </Carousel.Item>

      </Carousel>

    </Container>

  );
}

export default ClothingCarousel;