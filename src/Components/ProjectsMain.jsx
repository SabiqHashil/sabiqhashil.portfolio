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
        data-aos="fade-left"
        className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500"
      >
        Projects
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-10">
        {ProjectsData.map((project) => (
          <div
            data-aos="fade-up"
            key={project.id}
            className="card cursor-pointer"
          >
            <Link to={`/projects/${project.id}`}>
              <img src={project.image} alt="project logo" />
              <div className="card__content">
                <p className="card__title">{project.title}</p>
                <p className="card__description">
                  {project.description.substring(0, 100)}...{" "}
                  <a className="text-blue-400">Read More</a>
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
