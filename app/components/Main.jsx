import React from "react";
import "../globals.css";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-4 flex justify-center items-center">
        <div className="">
          <div className="mt-[-2rem] md:mt-[-10rem] mb-10">
            <h2 className="text-[#202020] text-2xl md:text-4xl">
              The University of Cincinnati's IEEE Student Group
            </h2>
            <p className="mx-auto mb-4 mt-2 text-[#696969] box h-22 w-[380px] md:w-[620px]">
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
              <button class="ui-btn">
                <span>ABOUT UC-IEEE</span>
              </button>
            </div>
          </div>

          <div className="text-left">
            <h2 className="text-[#202020] ml-4 md:ml-0">Meetings</h2>
            <p className="text-2xl mb-4 ml-4 md:ml-0 mt-2 text-[#696969] box h-22 w-[360px] md:w-[620px]">
              IEEE general meetings are held on alternating Thursdays at 5 PM
              Eastern Time during Fall and Spring semesters.
            </p>
            <button className="button ml-4 md:ml-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
