import { useState } from "react";
import SearchBar from "./components/SearchBar";
import MobileBar from "./components/MobileBar";

function App() {
  const [showBar, setShowBar] = useState(false);

  const handleOnCLick = () => {
    setShowBar((prevShowBar) => !prevShowBar);
  };
  return (
    <div className="container">
      <header>
        <h1 className="title f-rm">Rick Y Morty</h1>
        <SearchBar showbar={showBar} />
      </header>

      <section className="character-list">
        <h2 className="f-rm">Lista de personatges</h2>
        <div className="characters">
          <div className="character-card">
            <img
              src="/istockphoto-522001766-2048x2048.jpg"
              alt="Rick Sanchez"
            />
            <h3>Rick Sanchez</h3>
            <p>Human</p>
            <p>Earth (C-137)</p>
          </div>
        </div>
      </section>

      <MobileBar handleOnCLick={handleOnCLick} />
    </div>
  );
}

export default App;
