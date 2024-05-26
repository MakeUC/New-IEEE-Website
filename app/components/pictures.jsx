import React from "react";

const pictures = () => {
  return (
    <div className="w-full h-full items-center flex justify-center">
      <div className="max-w-[1280px] mb-[21rem]">
        <div className="absolute top-[45rem] bottom-0 left-[12rem] right-[12rem] mt-20 grid grid-cols-4 gap-4">
          <img
            className="rounded-lg h-[28rem] w-[22rem]"
            src="/images/img1.jpg"
            alt=""
          />
          <img
            className="rounded-lg h-[32rem] w-[22rem]"
            src="/images/img3.jpg"
            alt=""
          />
          <img
            className="rounded-lg h-[28rem] w-[22rem]"
            src="/images/img2.jpg"
            alt=""
          />
          <img
            className="rounded-lg h-[32rem] w-[22rem]"
            src="/images/uc.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default pictures;
