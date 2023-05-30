import Home from "./components/Home";
import Details from "./components/Details";
import { Routes, Route } from "react-router-dom";
import { useTheme, useThemeUpdate } from "./ThemeContext";

function App() {
  const isDarkMode = useTheme();
  const toggleTheme = useThemeUpdate();

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
            onClick={toggleTheme}
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
          <Route element={<Home />} path="/" />
          <Route
            element={<Details/>}
            path="/details"
          />
        </Routes>
      </div>
    </>
  );
}
export default App;
