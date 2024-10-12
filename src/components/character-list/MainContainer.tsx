import { ChangeEvent, useCallback, useEffect, useState } from "react";
import Card from "./card/Card";
import "./Character-list.css";
import { useDebounce } from "../../hooks/useDebounce";
import { useCharacters } from "../../hooks/useCharacters";
import { goTop } from "../../utils/goTop";
import GoTopBtn from "../go-top-btn/GoTopBtn";
import SearchBar from "../main-container/search-bar/SearchBar";
import Spinner from "../spinner/Spinner";

type CharacterListProps = {
  topPageRef: React.RefObject<HTMLDivElement>;
};

export default function CharacterList({ topPageRef }: CharacterListProps) {
  const [name, setName] = useState("");
  const [page, setPage] = useState(1);

  const debouncedName = useDebounce(name);

  const { characters, loading, showMoreButton } = useCharacters(
    debouncedName,
    page
  );

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
    <>
      <SearchBar handleOnChange={handleOnChange} />

      {/* Characters grid */}
      {loading && page === 1 ? (
        <Spinner />
      ) : (
        <section className="character-list">
          <div className="character-list__title">
            <h2 className="character-list__title__text font-rick">
              Lista de personajes
            </h2>
            <div className="character-list__title__decoration"></div>
          </div>

          {isEmpty ? (
            <>
              <p className="msg--error font-rick">
                No se encontraron resultados{" "}
                <i className="fa-solid fa-skull"></i>
              </p>
            </>
          ) : (
            <div className="character-list__grid">
              {characters.map((character) => {
                return <Card key={character.id} character={character} />;
              })}
            </div>
          )}

          {showMoreButton && (
            <div className="character-list__container-btn">
              <button
                className="character-list__btn--more"
                onClick={handleShowMore}
              >
                {loading ? (
                  <div className="spinning-loader"></div>
                ) : (
                  <p>Ver más...</p>
                )}
              </button>
            </div>
          )}
        </section>
      )}

      {!isEmpty && <GoTopBtn topRef={topPageRef} />}
    </>
  );
}
