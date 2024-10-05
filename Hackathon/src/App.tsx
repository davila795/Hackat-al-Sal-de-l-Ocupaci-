import { useState } from "react";
import SearchBar from "./components/search-bar/SearchBar";
import MobileBar from "./components/mobile-bar/MobileBar";
import Card from "./components/card/Card";
import "./App.css";

function App() {
  const [showBar, setShowBar] = useState(false);

  const handleOnCLick = () => {
    setShowBar((prevShowBar) => !prevShowBar);
  };

  return (
    <div className="container">
      <header className="header">
        <h1 className="header__title font-rick">Rick Y Morty</h1>
        <SearchBar showbar={showBar} />
      </header>

      <section className="character-list">
        <div className="character-list__title">
          <h2 className="character-list__title__text font-rick">
            Lista de personatges
          </h2>
          <div className="character-list__title__decoration"></div>
        </div>
        <div className="character-list__grid">
          <Card />
        </div>
      </section>

      <MobileBar handleOnCLick={handleOnCLick} />
    </div>
  );
}

export default App;
