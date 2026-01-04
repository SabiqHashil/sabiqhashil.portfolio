import { useEffect, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Image1 from "../assets/image1.jpg";
import DynamicRole from "./Reusable/DynamicRole";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div
      id="Home"
      className="lg:px-56 px-10 lg:py-0 py-8 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center"
    >
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
        <h1
          data-aos="slide-right"
          className="text-[50px] font-serif font-semibold mb-4 leading-normal uppercase"
        >
          Software{" "}
          <DynamicRole
            inline
            className="text-fuchsia-500 ont-serif font-semibold"
          />
        </h1>

        <p
          data-aos="slide-up"
          className="text-[16px] font-sans text-justify font-normal leading-normal text-white"
        >
          As a Software <DynamicRole inline />, I create innovative solutions that drive
          digital success. I focus on{" "}
          <DynamicRole inline roleAllow={false} descriptionAllow={true} /> and
          craft seamless web and mobile experiences using the MERN stack and
          Flutter. My goal is to deliver high-quality, scalable, and intuitive
          products that transform ideas into impactful realities.
        </p>
        <div className="flex items-center justify-center">
          <div
            data-aos="fade-zoom-in"
            className="flex items-center justify-center mt-3 lg:mt-5"
          >
            <div className="flex space-x-2">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/sabiqhashilkp"
                className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
              >
                <FaLinkedin className="text-[28px]" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/SabiqHashil"
                className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
              >
                <AiFillGithub className="text-[28px]" />
              </a>
              {/* <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://x.com/SabiqHashil"
                className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
              >
                <FaTwitter className="text-[28px]" />
              </a> */}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/sbq_developer"
                className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
              >
                <FaInstagram className="text-[28px]" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/Sabiqhashilkp786/"
                className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
              >
                <FaFacebook className="text-[28px]" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <img
        data-aos="zoom-out"
        src={Image1}
        width={290}
        height={290}
        className="rounded-full border-2 p-1 my-16 border-fuchsia-500 img_glow"
        alt="Profile"
      />
    </div>
  );
};

export default Banner;
