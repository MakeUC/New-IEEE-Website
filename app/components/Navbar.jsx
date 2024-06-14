"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import "../globals.css";

const navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const hamburgerRef = useRef(null);

  const handleNav = () => {
    setNav(!nav);
    if (hamburgerRef.current) {
      hamburgerRef.current.checked = !nav;
    }
  };

  useEffect(() => {
    const changeShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener("scroll", changeShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? "top-0 fixed w-full h-14 z-[100] backdrop2 transition-shadow duration-500"
          : "fixed w-full h-14 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/#home" className="ml-0 md:ml-4">
          <Image
            src="/images/ieee-1.png"
            alt="logo"
            width={115}
            height={115}
            quality={100}
          />
        </Link>
        <div className="mr-0 md:mr-6">
          <ul className="hidden items-center md:flex">
            <Link href="/#about">
              <li className="ml-10 text-xs text-[#616264] hover:text-[#1c1c1c] transition-colors duration-500">
                About Us
              </li>
            </Link>
            <Link href="/#membership">
              <li className="ml-6 text-xs text-[#616264] hover:text-[#1c1c1c] transition-colors duration-500">
                Membership
              </li>
            </Link>
            <Link href="/#meetingslides">
              <li className="ml-6 text-xs text-[#616264] hover:text-[#1c1c1c] transition-colors duration-500">
                Meeting Slides
              </li>
            </Link>
            <Link href="/#magazine">
              <li className="ml-6 text-xs text-[#616264] hover:text-[#1c1c1c] transition-colors duration-500">
                IEEE Student Magazine
              </li>
            </Link>
            <Link href="/#events">
              <li className="ml-6 text-xs text-[#616264] hover:text-[#1c1c1c] transition-colors duration-500">
                Events
              </li>
            </Link>
            <Link href="/#links">
              <li className="ml-6 text-xs text-[#616264] hover:text-[#1c1c1c] transition-colors duration-500">
                Links
              </li>
            </Link>
            <Link href="/#officers">
              <li className="ml-6 text-xs text-[#616264] hover:text-[#1c1c1c] transition-colors duration-500">
                Officers
              </li>
            </Link>
          </ul>
          <div className="md:hidden">
            <label className="hamburger">
              <input type="checkbox" ref={hamburgerRef} onClick={handleNav} />
              <svg viewBox="0 0 32 32">
                <path
                  className="line line-top-bottom"
                  d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                ></path>
                <path className="line" d="M7 16 27 16"></path>
              </svg>
            </label>
          </div>
        </div>
      </div>

      <div
        className={
          nav
            ? "md:hidden fixed right-0 top-0 w-full h-screen bg-black/70"
            : "hidden"
        }
      >
        <div
          className={
            nav
              ? "fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#fbfbfd] p-10 transition-transform duration-500 transform translate-x-0"
              : "fixed right-[-100%] top-0 p-10 transition-transform duration-500 transform translate-x-full"
          }
        >
          <div className="flex flex-col items-center justify-center text py-4 mx-auto h-full mt-[-40px]">
            <Link href="/#about">
              <div className="flex flex-col items-center py-4 text-[17px] text-[#75787B] hover:text-[#1c1c1c] transition-colors duration-500">
                About Us
              </div>
            </Link>

            <Link href="/#membership">
              <div className="flex flex-col items-center py-4 text-[17px] text-[#75787B] hover:text-[#1c1c1c] transition-colors duration-500">
                Membership
              </div>
            </Link>

            <Link href="/#meetingslides">
              <div className="flex flex-col items-center py-4 text-[17px] text-[#75787B] hover:text-[#1c1c1c] transition-colors duration-500">
                Meeting Slides
              </div>
            </Link>
            <Link href="/#magazine">
              <div className="flex flex-col items-center py-4 text-[17px] text-[#75787B] hover:text-[#1c1c1c] transition-colors duration-500">
                IEEE Magazine
              </div>
            </Link>
            <Link href="/#events">
              <div className="flex flex-col items-center py-4 text-[17px] text-[#75787B] hover:text-[#1c1c1c] transition-colors duration-500">
                Events
              </div>
            </Link>
            <Link href="/#links">
              <div className="flex flex-col items-center py-4 text-[17px] text-[#75787B] hover:text-[#1c1c1c] transition-colors duration-500">
                Links
              </div>
            </Link>
            <Link href="/#officers">
              <div className="flex flex-col items-center py-4 text-[17px] text-[#75787B] hover:text-[#1c1c1c] transition-colors duration-500">
                Officers
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
