const ProjectCard = ({ project }) => {
  return (
    <div className="h-auto bg-white w-80 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">
      <div className="h-56 ">
        <img
          src={project.img}
          alt="project-img"
          className="w-full h-full cover object-cover hover:scale-[1.1] transition-all duration-300"
        />
      </div>
      <div className="bg-cardbgcolor h-[12rem] flex flex-col relative">
        <h6 className="bg-homeorange text-white border-y-2 border-white uppercase py-0.5 px-1.5 font-bold">
          {project.name}
        </h6>
        <p className="text-lg font-medium px-1.5 text-gray-700">
          {project.text}
        </p>
        <p className="absolute bottom-0 left-0 px-1.5">{project.stacks}</p>
        <div className="px-1.5 flex absolute bottom-0 -right-1.5">
          <a
            className="text-white bg-homeorange uppercase px-4 py-1.5 rounded-sx font-bold hover:bg-amber-600 transition ease-out duration-300"
            href={project.link}
          >
            Live
          </a>
          <a
            className="border-l-2 border-white uppercase font-bold text-white bg-homeorange px-4 py-1.5 rounded-sx hover:bg-amber-600 transition ease-out duration-300"
            href={project.gitHub}
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
