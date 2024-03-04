"use client";
import React, { useState } from 'react';
import './CardSlider.css'; // Don't forget to create a corresponding CSS file
import Image from 'next/image';
import tryImage from "./../../../public/try.jpg"
import { TfiArrowCircleRight } from "react-icons/tfi";
import { TfiArrowCircleLeft } from "react-icons/tfi";

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
        <div className=" w-full">
            <div className="card-slider">
                <div
                    className="cards-wrapper"
                    style={{ transform: `translateX(-${ currentIndex * 25 }%)` }}
                >
                    {cards.map( ( card ) => (
                        <div key={card.id} className="card">
                            <Image src={card.img} className=" rounded-lg" />
                        </div>
                    ) )}
                </div>
            </div>
            <div className="flex gap-4 pl-10">
                <button className="prev-button" onClick={handlePrevClick}>
                <TfiArrowCircleLeft className="text-3xl "/>
            </button>
            <button className="next-button" onClick={handleNextClick}>
                <TfiArrowCircleRight className="text-3xl "/>

            </button>
            </div>
        </div>
    );
};

export default CardSlider;
