import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";

function App() {
  const projectArr = [
    {
      name: "Expense Tracker",
      text: "A kiadásaidat jegyzetelheted egy táblázatban. A desing saját. Responsive.",
      img: "../img/expense.png",
      stacks: "HTML CSS JS",
      link: "https://expense-rea1154.netlify.app",
      gitHub: "https://github.com/Rea1154/expense-t.",
      id: 1,
    },
    {
      name: "Coffee Shop",
      text: "Egy kitalált kávézó weblapja. A desing nem saját. Responsive.",
      img: "../img/coffee.png",
      stacks: "HTML CSS JS",
      link: "https://coffee-rea1154.netlify.app/",
      gitHub: "https://github.com/Rea1154/coffee-shop/tree/main/coffeeshop",
      id: 2,
    },
    {
      name: "Grocery Website",
      text: "Egy kitalált bolt weblapja. A desing nem saját. Responsive.",
      img: "../img/grocery.png",
      stacks: "HTML CSS JS",
      link: "https://grocery-rea1154.netlify.app/",
      gitHub: "https://github.com/Rea1154/grocery/tree/main/Grocery",
      id: 3,
    },
    {
      name: "Sticky Notes",
      text: "Sticy Notes app. Kis emlékeztető jegyzeteket írhatsz. A desing saját. Responsive.",
      img: "../img/note.png",
      stacks: "HTML CSS JS",
      link: "https://notes-rea1154.netlify.app/",
      gitHub: "https://github.com/Rea1154/sticky-notes/tree/main/notes",
      id: 4,
    },
    {
      name: "GPT-3",
      text: "Egy kitalált, sablon weblap. A desing nem saját. Responsive.",
      img: "../img/ai.png",
      stacks: "REACT",
      link: "https://gpt3-rea1154.netlify.app/",
      gitHub: "https://github.com/Rea1154/GPT-3/tree/main/my-site",
      id: 5,
    },
    {
      name: "Country Card",
      text: "Egy app, ami információkat ad ki országokról. A desing saját. Responsive.",
      img: "../img/country.png",
      stacks: "REACT",
      link: "https://country-rea1154.netlify.app",
      gitHub: "https://github.com/Rea1154/country-react",
      id: 6,
    },
  ];
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/projects"
            element={<Projects projectArr={projectArr} />}
          />
          <Route
            path="/aboutMe"
            element={<AboutMe projectArr={projectArr} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
