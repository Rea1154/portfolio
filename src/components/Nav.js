import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="pt-64 minW300px:flex minW610px:block justify-between">
      <Link
        className="text-homeorange uppercase minW1800px:text-[1.2rem] text-sm mr-20 hover:text-gray-200 btn-hover "
        to="/aboutMe"
      >
        Önéletrajz
      </Link>
      <Link
        className="text-homeorange uppercase minW1800px:text-[1.2rem] text-sm hover:text-gray-200 btn-hover"
        to="/projects"
      >
        Munkáim
      </Link>
    </nav>
  );
};

export default Nav;
