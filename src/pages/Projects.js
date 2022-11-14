import { Link } from "react-router-dom";
import CornerDecor from "../components/CornerDecor";
import DottedLine from "../components/DottedLine";
import ProjectCard from "../components/ProjectCard";

const Projects = ({ projectArr }) => {
  return (
    <section
      id="Project"
      className="w-full overflow-hidden min-h-screen h-auto bg-cover relative"
    >
      <CornerDecor />
      <Link className="flex w-full justify-center items-center py-3" to="/">
        <i className=" fa-solid fa-arrow-left text-homeorange my-[1rem]  text-xl"></i>
      </Link>

      <div className="pt-8 pb-[9rem] grid minW1800px:pt-[2rem] minW1800px:px-[15rem] minW1800px:grid-cols-3 minW610px:grid-cols-2 minW300px:grid-cols-1 justify-items-center gap-y-12 ">
        {projectArr.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <DottedLine />
    </section>
  );
};

export default Projects;
