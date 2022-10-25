import React from "react";
import Carousel from "react-bootstrap/Carousel";
import brand1 from "../../../assests/brands/brand1.jpg";
import brand2 from "../../../assests/brands/brand2.png";

const Carousels = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block " src={brand1} height={200} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={brand2}
          height={200}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Carousels;
