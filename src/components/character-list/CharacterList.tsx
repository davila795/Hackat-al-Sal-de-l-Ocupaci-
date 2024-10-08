import { Character } from "../../types";
import Card from "./card/Card";
import "./Character-list.css";

type CharacterListProps = {
  isEmpty: boolean;
  characters: Character[];
  showMoreButton: boolean;
  loading: boolean;
  handleShowMore: () => void;
};

export default function CharacterList({
  characters,
  handleShowMore,
  isEmpty,
  loading,
  showMoreButton,
}: CharacterListProps) {
  return (
    <section className="character-list">
      <div className="character-list__title">
        <h2 className="character-list__title__text font-rick">
          Lista de personajes
        </h2>
        <div className="character-list__title__decoration"></div>
      </div>

      {isEmpty ? (
        <>
          <p className="character-list__grid__message--not-found font-rick">
            No se encontraron resultados <i className="fa-solid fa-skull"></i>
          </p>
        </>
      ) : (
        <div className="character-list__grid">
          {characters.map((character) => {
            return <Card key={character.id} character={character} />;
          })}
        </div>
      )}

      <div className="character-list__container-btn">
        {showMoreButton && (
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
        )}
      </div>
    </section>
  );
}
