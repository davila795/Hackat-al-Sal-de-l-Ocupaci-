import { ChangeEvent, FormEvent, useCallback, useRef, useState } from "react";
import Header from "./components/header/Header";
import CharacterList from "./components/character-list/CharacterList";
import MobileBar from "./components/mobile-bar/MobileBar";
import { useCharacters } from "./hooks/useCharacters";

function App() {
  const [showSearchBarMobile, setshowSearchBarMobile] = useState(false);
  const [name, setName] = useState("");
  const [page, setPage] = useState(1);

  const { characters, loading, showMoreButton } = useCharacters(name, page);

  const topPageRef = useRef<HTMLDivElement>(null);

  const handleOnCLick = useCallback(() => {
    setshowSearchBarMobile(
      (prevshowSearchBarMobile) => !prevshowSearchBarMobile
    );
  }, []);

  const handleOnChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPage(1);
    setName(value);
  }, []);

  const handleShowMore = useCallback(() => {
    setPage((prevPage) => prevPage + 1);
  }, []);

  const handleOnSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setshowSearchBarMobile(false);
  }, []);

  const goToTop = useCallback(() => {
    topPageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div ref={topPageRef} className="container">
      <Header
        showSearchBarMobile={showSearchBarMobile}
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
      />
      {loading && <div className="spinning-loader"></div>}
      <CharacterList
        characters={characters}
        handleShowMore={handleShowMore}
        isEmpty={characters.length === 0}
        showMoreButton={showMoreButton}
        loading={loading}
      />
      <button className="btn--go-top" onClick={goToTop}>
        <i className="fa-solid fa-circle-up"></i>
      </button>
      <MobileBar handleOnCLick={handleOnCLick} />
    </div>
  );
}

export default App;
