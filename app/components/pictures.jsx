import React from "react";

const Pictures = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="max-w-[1280px] mb-[21rem]">
        <div className="absolute top-[45rem] bottom-0 left-[12rem] right-[12rem] mt-20 grid grid-cols-4 gap-4">
          {/* First Phone */}
          <div className="mockup-phone h-[36rem] border-gray-400 hidden lg:block">
            <div className="camera"></div>
            <div className="display">
              <div className="artboard artboard-demo phone-1 flex justify-center items-center">
                <img
                  className="rounded-lg h-[34rem] w-[20rem] hidden lg:block"
                  src="/images/img1.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* Second Phone with offset */}
          <div className="mockup-phone h-[36rem] border-gray-400 hidden lg:block mt-[-2rem]">
            <div className="camera"></div>
            <div className="display">
              <div className="artboard artboard-demo phone-1 flex justify-center items-center">
                <img
                  className="rounded-lg h-[34rem] w-[20rem] hidden lg:block"
                  src="/images/img3.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* Third Phone */}
          <div className="mockup-phone h-[36rem] border-gray-400">
            <div className="camera"></div>
            <div className="display">
              <div className="artboard artboard-demo phone-1 flex justify-center items-center">
                <img
                  className="rounded-lg h-[34rem] w-[20rem]"
                  src="/images/img2.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* Fourth Phone with offset */}
          <div className="mockup-phone h-[36rem] border-gray-400 mt-[-2rem]">
            <div className="camera"></div>
            <div className="display">
              <div className="artboard artboard-demo phone-1 flex justify-center items-center">
                <img
                  className="rounded-lg h-[34rem] w-[20rem]"
                  src="/images/uc.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pictures;
