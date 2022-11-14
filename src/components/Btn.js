const Btn = ({ setDisplayContact }) => {
  return (
    <button
      onClick={() => setDisplayContact((prev) => !prev)}
      className="tracking-wider uppercase minW2000px:text-base text-sm font-medium text-gray-300 border-solid border py-3.5 px-5 rounded-sm border-gray-200 hover:text-homeorange btn-hover"
    >
      Kapcsolat
    </button>
  );
};

export default Btn;
