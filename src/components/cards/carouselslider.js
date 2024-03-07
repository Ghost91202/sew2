"use client";
import React, { useState } from 'react';
import './CardSlider2.css'; // Don't forget to create a corresponding CSS file
import Image from 'next/image';
import tryImage from "./../../../public/2023_Remondis_Staffanstorp_S7.20_Web-20-768x512.webp"
import { TfiArrowCircleRight } from "react-icons/tfi";
import { TfiArrowCircleLeft } from "react-icons/tfi";
import Link from 'next/link';

const CardSlider = () => {
    const [ currentIndex, setCurrentIndex ] = useState( 0 );

    const cards = [
        // Add your card data here
        { id: 1, content: 'Card 1', img: tryImage },
        { id: 2, content: 'Card 2', img: tryImage },
        { id: 3, content: 'Card 3', img: tryImage },
        { id: 4, content: 'Card 4', img: tryImage },
        { id: 5, content: 'Card 5', img: tryImage },
        { id: 6, content: 'Card 6', img: tryImage },
        // Add more cards as needed
    ];

    const handlePrevClick = () => {
        setCurrentIndex( ( prevIndex ) => Math.max( 0, prevIndex - 1 ) );
    };

    const handleNextClick = () => {
        setCurrentIndex( ( prevIndex ) =>
            Math.min( cards.length - 4, prevIndex + 1 )
        );
    };

    return (
        <div className=" w-full  lg:pl-44 font-serif mt-20  text-gray-600">
            <div className=" flex flex-col gap-10 p-10">
                 <div className=" flex justify-between items-center lg:pr-20">
                <h1 className="text-2xl lg:text-4xl">New customer installations</h1>
                <Link href="#" className="rounded-xl lg:rounded-full border flex justify-center items-center p-2 h-10">Testimonials</Link>
            </div>
            <p className="text-balance lg:w-1/2">With annually more than 1,200 machines delivered worldwide, it&apos;s easy to get lost in the shuffle. For this reason, we have put together a selection of the most exciting current projects for you.</p>

           </div>
           <div className="card-slider2">
    <div
        className="cards-wrapper2 h-44 lg:h-72"
        style={{ transform: `translateX(-${currentIndex * 50}%)` }}
    >
        {cards.map((card) => (
            <div key={card.id} className="card2 md:w-1/2 lg:w-1/3 xl:w-1/4">
                <Image src={card.img} className="rounded-lg h-full w-full" />
            </div>
        ))}
    </div>
</div>

            <div className="flex gap-4 pl-10">
                <button className="prev-button2" onClick={handlePrevClick}>
                <TfiArrowCircleLeft className="text-3xl "/>
            </button>
            <button className="next-button2" onClick={handleNextClick}>
                <TfiArrowCircleRight className="text-3xl "/>

            </button>
            </div>
        </div>
    );
};

export default CardSlider;
