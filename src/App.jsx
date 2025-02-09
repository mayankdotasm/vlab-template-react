import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import "./App.css";
import Header from "./components/common/Header/Header";
import Aim from "./components/modules/Aim/Aim";
import Theory from "./components/modules/Theory/Theory";
import Procedure from "./components/modules/Procedure/Procedure";
import Practice from "./components/modules/Practice/Practice";
import Code from "./components/modules/Code/Code";
import Application from "./components/modules/Applications/Application";
import Quiz from "./components/modules/Quiz/Quiz";
import References from "./components/modules/References/References";
import TeamTools from "./components/modules/TeamnTools/TeamTools";


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
