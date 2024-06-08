import { AiFillGithub } from "react-icons/ai";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
// import { FiTwitter } from "react-icons/fa";
import img from "../assets/img.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FiTwitter } from "react-icons/fi";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="lg:px-56 px-10 lg:py-0 py-14 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
        <h1
          data-aos="fade-right"
          className="text-[52px] font-semibold mb-4 leading-normal uppercase"
        >
          Freelance <br />{" "}
          <span className="text-fuchsia-500">Software Developer</span>
        </h1>
      
        <p data-aos="fade-left">
          I am working as a Freelance Software developer ready to turn your
          visionary concepts into tangible, high-performing digital solutions.
          With a focus on both mobile and web development, I specialize in
          creating dynamic and user-friendly experiences using Flutter for
          mobile apps and the MERN stack for web applications.
        </p>
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center mt-3 lg:mt-5">
            <div className="flex space-x-2">
              <a
                target="_blank"
                href="https://github.com/SabiqHashil"
                className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
              >
                <AiFillGithub className="text-[28px]" />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/sabiqhashilkp"
                className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
              >
                <FaLinkedin className="text-[28px]" />
              </a>
              <a target="_blank"
                href="https://x.com/SabiqHashil"
                className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
              >
                <FiTwitter className="text-[28px]" />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/sbq_developer"
                className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
              >
                <FaInstagram className="text-[28px]" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <img
        data-aos="fade-up"
        src={img}
        width={290}
        height={290}
        className="rounded-full border-2 p-1 border-fuchsia-500 img_glow"
        alt="Profile Picture"
      />
    </div>
  );
};

export default Banner;
