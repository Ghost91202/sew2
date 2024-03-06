"use client";
import React, { useState, useEffect } from 'react';
import './ImageSlider.css'; // Create this CSS file for styling
import imttry from "../../../public/hero.jpg"
import Image from 'next/image';
const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    imttry,
    imttry,
    imttry,
    // Add more image URLs as needed
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000); // Change the duration as needed (in milliseconds)

    return () => {
      clearInterval(intervalId); // Cleanup the interval on component unmount
    };
  }, []);

  return (
    <div className="image-slider">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slider-image ${index === currentIndex ? 'active' : ''}`}
        >
          <Image src={image} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
