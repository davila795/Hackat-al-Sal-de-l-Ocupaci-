import {
  ChangeEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Header from "./components/header/Header";
import CharacterList from "./components/character-list/CharacterList";
import { useCharacters } from "./hooks/useCharacters";
import { useDebounce } from "./hooks/useDebounce";

function App() {
  const [name, setName] = useState("");
  const [page, setPage] = useState(1);

  const debouncedName = useDebounce(name);

  const { characters, loading, showMoreButton } = useCharacters(
    debouncedName,
    page
  );

  const topPageRef = useRef<HTMLDivElement>(null);

  const handleOnChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPage(1);
    setName(value);
  }, []);

  const handleShowMore = useCallback(() => {
    setPage((prevPage) => prevPage + 1);
  }, []);

  const goToTop = useCallback((e?: React.MouseEvent<HTMLButtonElement>) => {
    let behavior: ScrollBehavior = "auto";
    if (e) {
      e.preventDefault();
      behavior = "smooth";
    }

    topPageRef.current?.scrollIntoView({ behavior });
  }, []);

  useEffect(() => {
    goToTop();
  }, [debouncedName, goToTop]);

  const isEmpty = useMemo(() => characters.length === 0, [characters]);

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

      {!isEmpty && (
        <button className="btn--go-top" onClick={(e) => goToTop(e)}>
          <i className="fa-solid fa-circle-up"></i>
        </button>
      )}
    </div>
  );
}

export default App;
