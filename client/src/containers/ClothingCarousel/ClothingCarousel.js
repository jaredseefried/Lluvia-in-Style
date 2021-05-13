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
            src={images['lluvia-in-style-3.jpeg'].default}
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
        <Carousel.Item>
          <img
            className="clothing image"
            src={images['lluvia-in-style-28.jpeg'].default}
            alt="Lluvia in Style Children's Boutique Clothing Line"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="clothing image"
            src={images['lluvia-in-style-29.jpeg'].default}
            alt="Lluvia in Style Children's Boutique Clothing Line"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="clothing image"
            src={images['lluvia-in-style-30.jpeg'].default}
            alt="Lluvia in Style Children's Boutique Clothing Line"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="clothing image"
            src={images['lluvia-in-style-31.jpeg'].default}
            alt="Lluvia in Style Children's Boutique Clothing Line"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="clothing image"
            src={images['lluvia-in-style-32.jpeg'].default}
            alt="Lluvia in Style Children's Boutique Clothing Line"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="clothing image"
            src={images['lluvia-in-style-33.jpeg'].default}
            alt="Lluvia in Style Children's Boutique Clothing Line"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="clothing image"
            src={images['lluvia-in-style-34.jpeg'].default}
            alt="Lluvia in Style Children's Boutique Clothing Line"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="clothing image"
            src={images['lluvia-in-style-35.jpeg'].default}
            alt="Lluvia in Style Children's Boutique Clothing Line"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="clothing image"
            src={images['lluvia-in-style-36.jpeg'].default}
            alt="Lluvia in Style Children's Boutique Clothing Line"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="clothing image"
            src={images['lluvia-in-style-37.jpeg'].default}
            alt="Lluvia in Style Children's Boutique Clothing Line"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="clothing image"
            src={images['lluvia-in-style-38.jpeg'].default}
            alt="Lluvia in Style Children's Boutique Clothing Line"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="clothing image"
            src={images['lluvia-in-style-39.jpeg'].default}
            alt="Lluvia in Style Children's Boutique Clothing Line"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="clothing image"
            src={images['lluvia-in-style-40.jpeg'].default}
            alt="Lluvia in Style Children's Boutique Clothing Line"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="clothing image"
            src={images['lluvia-in-style-41.jpeg'].default}
            alt="Lluvia in Style Children's Boutique Clothing Line"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="clothing image"
            src={images['lluvia-in-style-42.jpeg'].default}
            alt="Lluvia in Style Children's Boutique Clothing Line"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="clothing image"
            src={images['lluvia-in-style-43.jpeg'].default}
            alt="Lluvia in Style Children's Boutique Clothing Line"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="clothing image"
            src={images['lluvia-in-style-43.jpeg'].default}
            alt="Lluvia in Style Children's Boutique Clothing Line"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="clothing image"
            src={images['lluvia-in-style-44.jpeg'].default}
            alt="Lluvia in Style Children's Boutique Clothing Line"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="clothing image"
            src={images['lluvia-in-style-45.jpeg'].default}
            alt="Lluvia in Style Children's Boutique Clothing Line"
          />
        </Carousel.Item>
      </Carousel>

    </Container>

  );
}

export default ClothingCarousel;