import React from "react";

const pictures = () => {
  return (
    <div className="w-full h-full items-center flex justify-center">
      <div className="max-w-[1280px] mb-[21rem]">
        <div className="absolute top-[45rem] bottom-0 left-[12rem] right-[12rem] mt-20 grid grid-cols-4 gap-4">
          <div className="mockup-phone h-[36rem] border-gray-400 hidden lg:block">
            <div className="camera"></div>
            <div className="display">
              <div className="artboard artboard-demo phone-1">
                <img
                  className="rounded-lg h-[36rem] w-[22rem] hidden lg:block"
                  src="/images/img1.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="mockup-phone h-[37rem] border-gray-400 hidden lg:block">
            <div className="camera"></div>
            <div className="display">
              <div className="artboard artboard-demo phone-1">
                <img
                  className="rounded-lg h-[36rem] w-[24rem] hidden lg:block"
                  src="/images/img3.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="mockup-phone h-[37rem] border-gray-400">
            <div className="camera"></div>
            <div className="display">
              <div className="artboard artboard-demo phone-1">
                <img
                  className="rounded-lg h-[36rem] w-[22rem]"
                  src="/images/img2.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="mockup-phone h-[37rem] border-gray-400">
            <div className="camera"></div>
            <div className="display">
              <div className="artboard artboard-demo phone-1">
                <img
                  className="rounded-lg h-[35rem] w-[22rem]"
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

export default pictures;
