import { ChangeEvent, useRef, useState } from "react";
import Header from "./components/header/Header";
import CharacterList from "./components/character-list/CharacterList";
import MobileBar from "./components/mobile-bar/MobileBar";
import { useCharacters } from "./hooks/useCharacters";

function App() {
  const [showBar, setShowBar] = useState(false);
  const [name, setName] = useState("");
  const [page, setPage] = useState(1);

  const { characters, loading, showMoreButton } = useCharacters(name, page);

  const topPageRef = useRef<HTMLDivElement>(null);

  const handleOnCLick = () => {
    setShowBar((prevShowBar) => !prevShowBar);
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPage(1);
    setName(value);
  };

  const handleShowMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const goToTop = () => {
    topPageRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div ref={topPageRef} className="container">
      <Header showBar={showBar} handleOnChange={handleOnChange} />
      {loading && <p>CARGANDO....</p>}
      <CharacterList
        characters={characters}
        handleShowMore={handleShowMore}
        isEmpty={characters.length === 0}
        showMoreButton={showMoreButton}
      />
      <button className="btn--go-top" onClick={goToTop}>
        <i className="fa-solid fa-circle-up"></i>
      </button>
      <MobileBar handleOnCLick={handleOnCLick} />
    </div>
  );
}

export default App;
