import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io5";

const SocialLinks = () => {
  return (
    <div>
      <div className="fixed left-10 bottom-0 space-y-6 flex flex-col items-center max-md:hidden z-20">
        <a
          href="https://x.com/UC_IEEE"
          target="_blank"
          className="text-[#00629B] hover:text-[#1c1c1c] hover:translate-y-[-4px] duration-500"
        >
          <FaXTwitter size={24} />
        </a>
        <a
          href="https://www.youtube.com/channel/UCv_GfHJ1PQHSJAFn7DJ6-rQ"
          target="_blank"
          className="text-[#00629B] hover:text-[#1c1c1c] hover:translate-y-[-4px] duration-500"
        >
          <FiYoutube size={24} />
        </a>
        <a
          href="https://github.com/IEEEatUC"
          target="_blank"
          className="text-[#00629B] hover:text-[#1c1c1c] hover:translate-y-[-4px] duration-500"
        >
          <IoLogoGithub size={24} />
        </a>
        <div className="border-l-2 border-[#00629B] h-32"></div>
      </div>
      <div className="fixed right-[-12px] bottom-0 space-y-4 flex flex-col items-center text-center max-md:hidden z-20">
        <div className="rotate-90 mb-[75px] pb-1 text-md text-[#00629B] hover:text-[#1c1c1c] hover:translate-y-[-4px] duration-500">
          <p>
            <a href="mailto:execieee@gmail.com">execieee@gmail.com</a>
          </p>
        </div>
        <div className="border-l-2 border-[#00629B] h-20"></div>
      </div>
    </div>
  );
};

export default SocialLinks;
