import Image2 from "../assets/image2.jpg";
import DynamicRole from "./Reusable/DynamicRole";
/* eslint-disable react/no-unescaped-entities */

const About = () => {
  return (
    <div
      id="About"
      className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center"
    >
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
        <img
          data-aos="zoom-in"
          src={Image2}
          width={200}
          height={200}
          className="rounded border-2 p-1 border-fuchsia-500 img_glow"
          alt="Profile picture of Sabiq Hashil"
        />
        <h1
          data-aos="slide-left"
          className="text-[50px] font-serif font-semibold mb-2 leading-normal text-fuchsia-500 uppercase"
        >
          About Me
        </h1>
        <h2
          data-aos="slide-down"
          className="text-[28px] font-sans font-medium mt-1 leading-normal uppercase"
        >
          Sabiq Hashil
        </h2>

        {/* Paragraph with dynamic role injected */}
        <p
          data-aos="slide-up"
          className="text-[16px] font-sans text-justify font-normal leading-normal text-white"
        >
          I am a passionate software professional committed to transforming
          ideas into cutting-edge digital experiences. Skilled in web and mobile
          development, I build scalable, high-performance applications that are
          both reliable and user-friendly. Leveraging modern technologies like
          the MERN stack and Flutter, I craft solutions that combine creativity,
          technical excellence, and intuitive design. I thrive on turning
          complex challenges into elegant, efficient solutions, ensuring every
          project delivers real value, seamless interactions, and a remarkable
          user experience. My work reflects a dedication to innovation,
          precision, and delivering results that exceed expectations.
        </p>
        <div data-aos="fade" className="flex items-center justify-center">
          <a
            href="/path/to/SABIQ HASHIL - RESUME.pdf"
            download="SABIQ HASHIL - RESUME.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="neno-button font-sans shadow-xl lg:mt-5 mt-3 hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-4 px-4 uppercase relative overflow-hidden">
              Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
