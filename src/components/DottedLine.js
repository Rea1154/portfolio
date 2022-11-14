const DottedLine = () => {
  return (
    <div className="flex w-full pt-5 minW1800px:absolute bottom-10 left-0">
      <div className=" dotten-line line1"></div>
      <a
        className="px-3 relative w-20 flex justify-center items-center"
        href="https://github.com/Rea1154?tab=repositories"
        target={"_blank"}
      >
        <i className="fa-brands fa-github text-4xl cursor-pointer  text-homeorange -translate-y-5 hover:text-gray-200 transition duration-300"></i>
      </a>

      <div className=" dotten-line "></div>
    </div>
  );
};

export default DottedLine;
