import Home from "./components/Home";
import Details from "./components/Details";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <header className="d-flex flex-row justify-content-between px-5 my-2 py-3 border-bottom">
        <h3>Where in the World?</h3>
        <button className="btn fw-bold">Dark Mode</button>
      </header>

      <div className="App">
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Details />} path="/details" />
        </Routes>
      </div>
    </>
  );
}

export default App;
