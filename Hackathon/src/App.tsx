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
      <header className="header">
        <h1 className="header__title font-rick">Rick Y Morty</h1>
        <SearchBar showbar={showBar} />
      </header>

      <section className="character-list">
        <div className="character-list__title">
          <h2 className="character-list__title__text font-rick">Lista de personatges</h2>
          <div className="character-list__title__decoration" ></div>
        </div>
        <div className="character-list__grid">
          <div className="character-list__grid__card">
            <img
              src="/istockphoto-522001766-2048x2048.jpg"
              alt="Rick Sanchez"
              className="character-list__grid__card__img"
            />
            <h3 className="character-list__grid__card__title" >Rick Sanchez</h3>
            <p className="character-list__grid__card__body" >Human</p>
            <p className="character-list__grid__card__body" >Earth (C-137)</p>
          </div>
        </div>
      </section>

      <MobileBar handleOnCLick={handleOnCLick} />
    </div>
  );
}

export default App;
