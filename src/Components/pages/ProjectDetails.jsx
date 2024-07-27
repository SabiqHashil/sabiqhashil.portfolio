import { useParams, useNavigate } from "react-router-dom";
import { ProjectsData } from "../ProjectsData";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = ProjectsData.find((p) => p.id === id);

  if (!project) return <div>Project not found</div>;

  return (
    <div className="lg:p-20 p-14 flex flex-col items-center justify-center">
      <img
        className="lg:w-1/3 md:w-1/3  mb-10 rounded-3xl border border-fuchsia-800"
        src={project.image}
        alt={project.title}
      />
      <h3 className="text-[30px] font-semibold mb-5 text-center leading-normal uppercase text-fuchsia-500">
        {project.title}
      </h3>
      <p className="text-[16px]  font-normal leading-normal text-white">
        {project.description}
      </p>
      <div className="flex flex-row">
        <a
          target="_blank"
          href={project.link}
          className="text-white m-10 self-center  cursor-pointer bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded"
        >
          Visit Project
        </a>

        <button
          onClick={() => navigate("/")}
          className="text-white m-10 self-center cursor-pointer bg-fuchsia-500 hover:bg-fuchsia-700 font-bold py-2 px-4 rounded"
        >
          Back to Projects
        </button>
      </div>
    </div>
  );
};

export default ProjectDetails;
