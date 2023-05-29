import Home from "./components/Home";

function App() {
  return (
    <>
    <header className="d-flex flex-row justify-content-between px-5 my-2 py-3 border-bottom">
      <h3>Where in the World?</h3>
      <button className="btn fw-bold">Dark Mode</button>
    </header>
    <div className="App">
      <Home/>
    </div>
    </>
  );
}

export default App;
