import img from "../assets/img.jpg";

const About = () => {
  return (
    <div
      id="About"
      className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center"
    >
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
        <img
          data-aos="fade-down"
          src={img}
          width={290}
          height={290}
          className="rounded border-2 p-1 border-fuchsia-500 img_glow"
          alt="Profile Picture"
        />
        <h1
          data-aos="fade-right"
          className="text-[52px] font-semibold mb-2 leading-normal text-fuchsia-500 uppercase"
        >
          About me
        </h1>
        <h2
          data-aos="fade-left"
          className="text-[28px] font-medium mt-1 leading-normal uppercase"
        >
          Sabiq Hashil
        </h2>
        <p data-aos="fade-left">
          I am a self-taught freelance software developer specializing in
          crafting exceptional digital experiences. With expertise spanning web
          application and mobile app development, I deliver efficient,
          cost-effective, and high-quality solutions. My focus on speed,
          user-friendliness, and accessibility ensures optimal user experiences.
          Clients appreciate the versatility I bring to projects, seamlessly
          navigating both front-end and back-end development. Whether it's
          creating successful web apps or diving into the world of mobile
          development, I am committed to exceeding expectations and bringing
          your digital vision to life.
        </p>
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2">
              <a href="#" download="Resume.pdf" target="_blank">
                <button className="neno-button shadow-xl lg:mt-5 mt-3 hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-4 px-4 uppercase relative overflow-hidden">
                  Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
