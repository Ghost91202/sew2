"use client";
import React, { useState } from 'react';
import './CardSlider.css'; // Don't forget to create a corresponding CSS file
import Image from 'next/image';
import tryImage from "./../../../public/csm_Magnettrommel-new_69f1c8c699.webp"
import mimg from "../../../public/Linearschwingsieb_Siebtechnik.webp"
import mimg2 from "../../../public/csm_Vibrationsfoerderrinne-elektromagnetisch_rendering-new_ce352bfd6f.webp"
import mimg3 from "../../../public/csm_product-default_ac60c23df3.png"
import { HiArrowLongRight } from "react-icons/hi2";
import { HiArrowLongLeft } from "react-icons/hi2";
import Link from 'next/link';
import { GoSearch } from "react-icons/go";

const CardSlider = () => {
    const [ currentIndex, setCurrentIndex ] = useState( 0 );

    const cards = [
        // Add your card data here
        { id: 1, content: 'Screening machines', img: tryImage },
        { id: 2, content: 'Magnetic separators', img: mimg },
        { id: 3, content: 'Vibroconveyors', img: mimg2 },
        { id: 4, content: 'All Machines', img: mimg3 },

        // Add more cards as needed
    ];

    const handlePrevClick = () => {
        setCurrentIndex( ( prevIndex ) => Math.max( 0, prevIndex - 1 ) );
    };

    const handleNextClick = () => {
        setCurrentIndex( ( prevIndex ) =>
            Math.min( cards.length - 3, prevIndex + 1 )
        );
    };

    return (
        <div className=" w-full font-serif flex flex-col gap-10">
            <h1 className="lg:text-4xl text-2xl p-5 lg:p-10 text-gray-600 ">The right machine for every application.</h1>
            <div className="bg-gray-300 flex flex-col gap-5">
                 <div className="card-slider ">
                <div
                    className="cards-wrapper"
                    style={{ transform: `translateX(-${ currentIndex * 50 }%)` }}>
                     {cards.map( ( card ) => (
                        <div key={card.id} className="card h-3/4 ">
                             <Image src={card.img} className="h-full rounded-lg" />
                             <h1 className="flex justify-center  text-gray-600 lg:text-2xl text-sm font-medium">{card.content}</h1>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex gap-4 pl-10 justify-center p-5 mr-6">
                <button className="prev-button" onClick={handlePrevClick}>
                <HiArrowLongLeft className="text-3xl font-thin  "/>
            </button>
            <button className="next-button" onClick={handleNextClick}>
                <HiArrowLongRight className="text-3xl "/>

            </button>
            </div>
            </div>
            <div className=" flex justify-center">
                <Link href="#" className=" bg-red-500 text-white w-32 lg:w-44 p-2 lg:text-xl text-sm  items-center justify-center flex">ALL MACHINES</Link>
</div>
        </div>
    );
};

export default CardSlider;
