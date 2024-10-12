import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";
import Header from "./components/header/Header";
import CharacterList from "./components/character-list/CharacterList";
import { useCharacters } from "./hooks/useCharacters";
import { useDebounce } from "./hooks/useDebounce";
import GoTopBtn from "./components/go-top-btn/GoTopBtn";
import { goTop } from "./utils/goTop";

function App() {
  const [name, setName] = useState("");
  const [page, setPage] = useState(1);

  const debouncedName = useDebounce(name);

  const { characters, loading, showMoreButton } = useCharacters(
    debouncedName,
    page
  );

  const topPageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    goTop(topPageRef);
  }, [debouncedName]);

  const handleOnChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPage(1);
    setName(value);
  }, []);

  const handleShowMore = useCallback(() => {
    setPage((prevPage) => prevPage + 1);
  }, []);

  const isEmpty = characters.length === 0;

  return (
    <div ref={topPageRef} className="container">
      <Header handleOnChange={handleOnChange} />
      {loading && page === 1 ? (
        <div className="spinning-loader"></div>
      ) : (
        <CharacterList
          characters={characters}
          handleShowMore={handleShowMore}
          isEmpty={isEmpty}
          showMoreButton={showMoreButton}
          loading={loading}
        />
      )}
      {!isEmpty && <GoTopBtn topRef={topPageRef} />}
    </div>
  );
}

export default App;
