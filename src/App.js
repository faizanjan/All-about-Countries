import Home from "./components/Home";
import Details from "./components/Details";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  let [isDarkMode, setDarkMode] = useState(false);

  return (
    <>
      <header
        className={
          "d-flex flex-row justify-content-between px-5 mb-2 py-3 border-bottom" +
          (isDarkMode ? " text-light bg-dark" : " text-dark bg-light")
        }
      >
        <h3>Where in the World?</h3>
        <span className="d-flex flex-row align-items-center">
          <button
            className={
              "btn fw-bold" +
              (isDarkMode ? " text-light bg-dark" : " text-dark bg-light")
            }
            onClick={() => {
              setDarkMode(!isDarkMode);
            }}
          >
            <i
              className={isDarkMode ? "fa-solid fa-sun" : "fa-solid fa-moon"}
            ></i>{" "}
            &nbsp;
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </span>
      </header>

      <div className="App">
        <Routes>
          <Route element={<Home isDarkMode={isDarkMode} />} path="/" />
          <Route
            element={<Details isDarkMode={isDarkMode} />}
            path="/details"
          />
        </Routes>
      </div>
    </>
  );
}
export default App;
