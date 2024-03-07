"use client";
import React, { useState } from "react";
import "./CardSlider3.css"; // Don't forget to create a corresponding CSS file
import Image from "next/image";
import tryImage from "./../../../public/2023_Remondis_Staffanstorp_S7.20_Web-20-768x512.webp";
import { TfiArrowCircleRight } from "react-icons/tfi";
import { TfiArrowCircleLeft } from "react-icons/tfi";
import Link from "next/link";
import { SlArrowRight } from "react-icons/sl";
const CardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    // Add your card data here
    { id: 1, content: "/contact", img: tryImage },
    { id: 2, content: "Card 2", img: tryImage },
    { id: 3, content: "Card 3", img: tryImage },
    { id: 4, content: "Card 4", img: tryImage },
    { id: 5, content: "Card 5", img: tryImage },
    { id: 6, content: "Card 6", img: tryImage },
    // Add more cards as needed
  ];

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => Math.min(cards.length - 4, prevIndex + 1));
  };

  return (
    <div className=" w-full  lg:pl-44 font-serif mt-20 flex flex-col gap-10  text-gray-600">
      <div className=" flex flex-col gap-10 p-10">
        <div className=" flex justify-between items-center lg:pr-20">
          <h1 className="text-2xl lg:text-4xl">Our Best Sellers</h1>
          <Link
            href="#"
            className="rounded-xl lg:rounded-full border flex justify-center items-center p-2 h-10"
          >
            Request a Quote
          </Link>
        </div>
        <p className="text-balance lg:w-1/2">
          Over the decades, many of our shredders, briquette and drainage
          presses have become true classics for waste processing. Shiva
          engineering works from Germany has proven itself thousands of times
          and is appreciated worldwide. The following machines are particularly
          popular at the moment.
        </p>
      </div>
      <div className="card-slider3">
        <div
          className="cards-wrapper3 h-44 lg:h-auto "
          style={{ transform: `translateX(-${currentIndex * 50}%)` }}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="card3 md:w-1/2 lg:w-1/3 xl:w-1/4  flex flex-col gap-20  m-10"
            >
              <div className=" border-l-2 border-red-600  pl-10">

                <Image
                  src={card.img}
                  className="rounded-lg h-full w-full"
                />
              </div>
              <Link
                href={card.content}
                className=" hover:text-red-500 flex text-gray-400 justify-around items-center underline"
              >
                Explore Machine <SlArrowRight />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-4 pl-10">
        <button className="prev-button3" onClick={handlePrevClick}>
          <TfiArrowCircleLeft className="text-3xl " />
        </button>
        <button className="next-button3" onClick={handleNextClick}>
          <TfiArrowCircleRight className="text-3xl " />
        </button>
      </div>
      <div className=" bg-red-500 text-white flex justify-between w-3/4 p-3 rounded-lg items-center">
        <h1>Explore all of our machines, solutions and capabilities</h1>
        <Link
          href="#"
          className=" rounded-full bg-white text-black p-2 text-sm flex justify-between items-center lg:w-44 hover:bg-blue-500 hover:text-white">

          Get in touch <SlArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default CardSlider;
