import DottedLine from "../components/DottedLine";
import Btn from "../components/Btn";
import Nav from "../components/Nav";
import CornerDecor from "../components/CornerDecor";
import Contact from "../components/Contact";
import { useState } from "react";

const Home = () => {
  const [displayContact, setDisplayContact] = useState(false);

  return (
    <div className="minW2000px:p-[5rem] minW1800px:p-[3rem] minW800px:p-5 minW610px:p-3 bg-black h-screen overflow-hidden">
      <header className="minW2000px:p-[2rem] border overflow-hidden border-gray-900 w-full h-full bg-cover relative">
        <div className="overflow-hidden pt-8 px-8">
          <CornerDecor />
          <h1 className="minW2000px:text-8xl minW800px:text-7xl uppercase tracking-wide minW300px:text-[2.2rem] text-gray-100 minW300px:pt-3">
            Ster Andrea
          </h1>
          <h3 className="minW2000px:text-3xl minW800px:text-2xl minW800px:my-6 tracking-widest uppercase  minW300px:text-gray-300 my-1 mb-5">
            Frontend fejlesztő
          </h3>
          <div className="flex minW610px:flex-row minW300px:flex-col">
            <div>
              <Btn setDisplayContact={setDisplayContact} />
            </div>
            <Contact displayContact={displayContact} />
          </div>

          <Nav />
        </div>

        <DottedLine />
      </header>
    </div>
  );
};

export default Home;
