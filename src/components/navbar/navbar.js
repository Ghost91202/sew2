"use client";
import React, { useState } from 'react';
import styles from './HoverComponent.css';
import Link from 'next/link';
import { TfiAlignRight } from "react-icons/tfi";
import { CiMail } from "react-icons/ci";

// import component 👇
import Drawer from 'react-modern-drawer'

//import styles 👇
import 'react-modern-drawer/dist/index.css'
const Navbar = () => {
  const [ isHovered1, setIsHovered1 ] = useState( false );
  const [ isHovered2, setIsHovered2 ] = useState( false );
  const [ isHovered3, setIsHovered3 ] = useState( false );
  const [ isImageShow1, setIsImageShow1 ] = useState( false );
  const [ isOpen, setIsOpen ] = React.useState( false )
  const toggleDrawer = () => {
    setIsOpen( ( prevState ) => !prevState )
  }
  const [ isOpen2, setIsOpen2 ] = React.useState( false )
  const toggleDrawer2 = () => {
    setIsOpen2( ( prevState ) => !prevState )
  }

  return (
    <div className=" ">
      <div className={styles.navbar}>
        <div className="flex gap-10 relative bg-orange-500 w-screen text-white items-center p-1">
          <div className="flex flex-col">
            <button
              onMouseEnter={() => setIsHovered1( true )}
              onMouseLeave={() => setIsHovered1( false )}
              className={styles.button}
            >
              Home
            </button>
            {isHovered1 && (
              <div className="absolute top-10 z-50 bg-zinc-200 w-screen ">
                <p className={styles.hoverParagraph}>
                  Welcome to the Home page!
                </p>
              </div>
            )}
          </div>

          <div className="flex flex-col">
            <button
              onMouseEnter={() => setIsHovered2( true )}
              onMouseLeave={() => setIsHovered2( false )}
              className={styles.button}
            >
              About
            </button>
            {isHovered2 && (
              <div className="absolute top-10 z-50 bg-zinc-200 w-screen  left-0">
                <div className={styles.hoverParagraph}>
                  <Link href="#">more about us </Link>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col">
            <div
              onMouseEnter={() => setIsHovered3( true )}
              onMouseLeave={() => setIsHovered3( false )}
              className={styles.button}
            >
              <div className=" cursor-pointer  items-center  h-10 pt-2">Products</div>
              {isHovered3 && (
                <div className="absolute top-10 z-50 bg-zinc-200 w-screen  left-0 p-4">
                  <div className={styles.hoverParagraph}>
                    <div className="">
                      <Link href="#">machinery </Link>
                      <Link href="#">machinery </Link>
                      <Link href="#">machinery </Link>
                      <Link href="#">machinery </Link>
                      <Link href="#">machinery </Link>
                      <Link href="#">machinery </Link>
                      <Link href="#">machinery </Link>

                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="sidebar w-24 bg-white/90 flex flex-col justify-between pt-2 right-0 absolute z-50">
          <div className="h-10 flex justify-center">
            <button onClick={toggleDrawer} >
              <TfiAlignRight className="text-3xl" />
              <div>
                <span className="w-6 h-1 bg-gray-400"></span>
                <span></span>
                <span></span>
              </div>
            </button>
            <Drawer
              open={isOpen}
              onClose={toggleDrawer}
              direction='right'
              className='bla bla bla'
            >
              <div>Hello World</div>
            </Drawer>
          </div>
          <div className="h-16 flex justify-center items-center bg-orange-600 p-2">
            <button onClick={toggleDrawer2} >
              <CiMail className="text-4xl flex text-white " />
            </button>
            <Drawer
              open={isOpen2}
              onClose={toggleDrawer2}
              direction='right'
              className='bla bla bla'
            >
              <div>Hello World2</div>
            </Drawer>


          </div>
        </div>
      </div>

    </div>

  );
};

export default Navbar;