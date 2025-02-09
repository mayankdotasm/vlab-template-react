import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Aim from "./components/Aim/Aim";
import Theory from "./components/Theory/Theory";
import Procedure from "./components/Procedure/Procedure";
import Practice from "./components/Practice/Practice";
import Code from "./components/Code/Code";
import Application from "./components/Applications/Application";
import Quiz from "./components/Quiz/Quiz";
import References from "./components/References/References";
import TeamTools from "./components/TeamnTools/TeamTools";


const pages = [
  { path: "/aim", name: "Aim", component: <Aim /> },
  { path: "/theory", name: "Theory", component: <Theory /> },
  { path: "/procedure", name: "Procedure", component: <Procedure /> },
  { path: "/practice", name: "Practice", component: <Practice /> },
  { path: "/code", name: "Code", component: <Code /> },
  { path: "/application", name: "Application", component: <Application /> },
  { path: "/quiz", name: "Quiz", component: <Quiz /> },
  { path: "/references", name: "References", component: <References /> },
  { path: "/tnt", name: "Team & Tools", component: <TeamTools /> },
];

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <div className="labtitle">
          <h1>Your vlab title</h1>
        </div>

        <nav className="navigation">
          {pages.map(({ path, name }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                isActive ? "link active-link" : "link"
              }
            >
              <img
                className="icon"
                src={`/nav-icons/${path.slice(1)}.png`}
                alt={name}
              />
              <span>{name}</span>
            </NavLink>
          ))}
        </nav>

        <div className="content-container">
          <div className="content">
            <Routes>
              {pages.map(({ path, name, component }) => (
                <Route
                  key={path}
                  path={path}
                  element={
                    <>
                      <h1 className="title">{name}</h1>
                      {component}
                    </>
                  }
                />
              ))}
              <Route path="*" element={<Aim />} /> {/* Default route */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
