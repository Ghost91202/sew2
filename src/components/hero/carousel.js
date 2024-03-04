"use client";
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CardCarousel.css'; // Create this CSS file for styling
import tryimg from "../../../public/try.jpg"
import Image from 'next/image';
import "./CardCarousel.css"
const CardCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000, // Set the duration for automatic sliding (in milliseconds)
  };

  const cards = [
    { id: 1, content: 'Card 1', img:tryimg },
    { id: 2, content: 'Card 2', img:tryimg },
    { id: 3, content: 'Card 3', img:tryimg },
    { id: 4, content: 'Card 4', img:tryimg },
    // Add more cards as needed
  ];

  return (
    <Slider {...settings} className="imageSize w-screen overflow-hidden">
      {cards.map((card) => (
        <div key={card.id} className=" flex w-screen imageSize overflow-hidden">
            <Image src={card.img}  className=" w-full imageSize" />
        </div>
      ))}
    </Slider>
  );
};

export default CardCarousel;
