import { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import { ProjectsData } from "./ProjectsData";

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div
      id="Projects"
      className="p-20 lg:mb-20 flex flex-col items-center justify-center"
    >
      <h1
        data-aos="fade-right"
        className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500"
      >
        Projects
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-10">
        {ProjectsData.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            className="cursor-pointer"
          >
            <img
              data-aos="fade-up"
              height={250}
              width={250}
              className="text-[26px] flex text-center items-center justify-center rounded-3xl p-1 border border-fuchsia-800 b_glow"
              src={project.image} // Ensure this path is correct
              alt={project.title}
            />
            <h3
              data-aos="fade-down"
              className="text-[25px] mt-5 font-semibold mb-3 leading-normal uppercase text-fuchsia-500"
            >
              {project.title}
            </h3>
            <p
              data-aos="fade-left"
              className="text-[16px] font-normal leading-normal text-white"
            >
              {project.description.substring(0, 100)}...{" "}
              <a className="text-blue-500 cursor-pointer">Read More</a>
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
