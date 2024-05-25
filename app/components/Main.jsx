import React from "react";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center relative">
      <div className="max-w-[1240px] w-full h-full mx-auto p-4 flex justify-center items-center">
        <div className="grid grid-cols-2 ">
          <div className="">
            <h1>Welcome to IEEE</h1>
          </div>
          <div className="">
            <h2>Meeting Dates</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
