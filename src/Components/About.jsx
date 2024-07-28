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
          src="/images/img.jpg"
          width={200}
          height={200}
          className="rounded border-2 p-1 border-fuchsia-500 img_glow"
          alt="Profile picture of Sabiq Hashil"
        />
        <h1
          data-aos="slide-right"
          className="text-[52px] font-semibold mb-2 leading-normal text-fuchsia-500 uppercase"
        >
          About Me
        </h1>
        <h2
          data-aos="slide-down"
          className="text-[28px] font-medium mt-1 leading-normal uppercase"
        >
          Sabiq Hashil
        </h2>
        <p
          data-aos="slide-up"
          className="text-[16px] text-justify font-normal leading-normal text-white"
        >
          I am a self-taught freelance software developer dedicated to
          transforming your digital concepts into reality. My skills span web
          and mobile app development, enabling me to provide efficient,
          cost-effective, and high-quality solutions. With a focus on
          performance, intuitive design, and accessibility, I ensure that every
          project delivers an exceptional user experience. Clients value my
          ability to seamlessly integrate front-end and back-end technologies.
          Whether it's developing compelling web applications or engaging mobile
          apps, I am committed to delivering results that exceed expectations
          and bring your digital vision to life.
        </p>
        <div  data-aos="fade" className="flex items-center justify-center">
          <a
            href="/path/to/SABIQ HASHIL - RESUME.pdf"
            download="SABIQ HASHIL - RESUME.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="neno-button shadow-xl lg:mt-5 mt-3 hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-4 px-4 uppercase relative overflow-hidden">
              Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
