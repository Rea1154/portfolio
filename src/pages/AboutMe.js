import andi from "../img/andi.jpg";
import ContactForCv from "../components/ContactForCv";
import { Link } from "react-router-dom";
import CornerDecor from "../components/CornerDecor";

const AboutMe = ({ projectArr }) => {
  return (
    <section
      id="About"
      className="flex flex-col justify-center items-center minW2000px:px-[28rem] bg-cover minW1800px:px-[17rem] w-full min-h-screen h-auto minW1300px:px-[12rem] minW610px:px-[3rem] minW300px:px-0 py-[5rem] shadow-md"
    >
      <CornerDecor />
      <Link className="flex justify-center items-center" to="/">
        <i className="fa-solid fa-arrow-left text-homeorange my-[1rem] text-xl"></i>
      </Link>

      <div className="bg-gray-100 minW610px:p-5 rounded-md relative">
        <p className="text-center uppercase tracking-wide minW300px:text-[2.5rem] minW610px:text-[3rem] border-black border-b-2 mb-4 ">
          Ster Andrea
        </p>
        <div className="w-full flex minW800px:flex-row minW300px:flex-col">
          <div className=" minW800px:w-1/2 minW300px:w-full flex flex-col items-center">
            <img
              className="rounded-md object-cover w-52"
              src={andi}
              alt="andi cv kép"
            />
            <ContactForCv />
          </div>
          <div className="minW800px:w-1/2 minW300px:w-full minW300px:pt-3 minW800px:pt-0 flex flex-col items-center">
            <div className="text-center pb-10">
              <h5 className="cv-h5">Képzettség</h5>
              <p className="cv-p">HTML</p>
              <p className="cv-p">CSS/SCSS</p>
              <p className="cv-p">Tailwind</p>
              <p className="cv-p">JavaScript</p>
              <p className="cv-p">React</p>
              <p className="cv-p">Fetch</p>
            </div>
            <div className="text-center">
              <h5 className="cv-h5">Weblapjaim / Appjaim</h5>
              {projectArr.map((project) => (
                <a className="cv-p block" href={project.link}>
                  {project.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="minW1800px:px-[7rem] text-center text-[1.1rem] py-[2rem] font-medium">
          Egy éve kezdett el foglalkoztatni a programozás. Online kurzusokon
          szereztem meg az alapokat. Biztosabb tudást követően, elkezdtem a
          saját projektjeimen dolgozni. A jövőmet Frontend fejlesztőként
          képzelem el. Fontosnak tartom hogy igényes munka kerüljön ki a kezeim
          közül. Célom a folyamatos fejlődés.
        </p>
        <div className="flex minW800px:flex-row minW300px:flex-col border-t-2 border-black">
          <div className="minW800px:w-1/2 minW300px:w-full text-center py-3 ">
            <h5 className="cv-h5">Tapasztalt</h5>
            <p className="font-medium minW1800px:px-[7rem]">
              Webfejlesztői munkatapasztalatomat egyelőre csak a saját magamnak
              elkészített gyakorló-projektjeim tükrözik.
            </p>
          </div>
          <div className="minW800px:w-1/2 minW300px:w-full text-center py-3 ">
            <h5 className="cv-h5">Tanulmányok</h5>
            <p className="font-medium">BGSZC Dobos C. József</p>
            <p className="font-medium">Katona József Technikum</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
