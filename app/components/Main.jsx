import React from "react";
import "../globals.css";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-4 flex justify-center items-center">
        <div className="">
          <div className="absolute left-[2rem] top-[5rem] md:left-[3rem] md:top-[6rem] lg:top-[12rem] lg:left-[40rem] w-72 h-72 bg-[#f80b0b] rounded-full mix-blend-multiply filter blur-xl opacity-70 md:animate-blob md:animation-delay-4000"></div>
          <div className="absolute top-[6rem] right-[1rem] md:top-[10rem] md:right-[6rem] lg:top-[12rem] lg:right-[44rem] w-72 h-72 bg-[#555657] rounded-full mix-blend-multiply filter blur-xl opacity-70 md:animate-blob md:animation-delay-2000"></div>
          <div className="absolute bottom-[22rem] left-[1rem] md:bottom-[40rem] md:left-[2rem] lg:bottom-[28rem] lg:left-[27rem] w-72 h-72 bg-[#4b4c4d] rounded-full mix-blend-multiply filter blur-xl opacity-70 md:animate-blob md:animation-delay-2000"></div>
          <div className="absolute bottom-[22rem] left-[4rem] md:bottom-[45rem] md:left-[20rem] lg:bottom-[28rem] lg:left-[70rem] w-72 h-72 bg-[#f80b0b] rounded-full mix-blend-multiply filter blur-xl opacity-70 md:animate-blob md:animation-delay-4000"></div>

          <div className="absolute top-[20rem] md:top-[30rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-[-2rem] bg-[#ffffff] md:mt-[-10rem] p-4 shadow-md rounded-md mb-10 z-10">
            <h2 className="text-[#202020] text-xl md:text-4xl">
              The University of Cincinnati's IEEE Student Group
            </h2>
            <p className="mx-auto mb-4 mt-2 text-[#696969] box h-22 w-[340px] md:w-[620px]">
              Hi, there! We're the student branch of{" "}
              <a
                className="text-[#BA0C2F] hover:text-[#383838]"
                href="https://www.ieee.org/"
                target="_blank"
              >
                IEEE
              </a>{" "}
              at the University of Cincinnati. UC-IEEE is open to all majors and
              IEEE.org{" "}
              <span className="text-[#BA0C2F] hover:text-[#383838]">
                membership
              </span>{" "}
              is not required. We bring in great{" "}
              <span className="text-[#BA0C2F] hover:text-[#383838]">
                speakers
              </span>
              , host fun social events, and{" "}
              <span className="text-[#BA0C2F] hover:text-[#383838]">
                hands-on workshops
              </span>
              .
            </p>
            <div className=" flex justify-center items-center">
              <button className="ui-btn">
                <span>ABOUT UC-IEEE</span>
              </button>
            </div>
          </div>

          <div className="text-left mt-[20rem] md:mt-[14rem]">
            <div className="flex items-center ml-4 md:ml-0">
              <h2 className="text-[#202020]">Meetings</h2>
              <hr className="ml-2 flex-grow border-1 border-[#a3a3a3]" />
            </div>
            <p className="text-2xl mb-4 ml-4 md:ml-0 mt-2 text-[#696969] box h-22 w-[360px] md:w-[620px]">
              IEEE general meetings are held on alternating Thursdays at 5 PM
              Eastern Time during Fall and Spring semesters.
            </p>
            <button className="button ml-4 md:ml-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                ></path>
              </svg>

              <div className="text">Details</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
