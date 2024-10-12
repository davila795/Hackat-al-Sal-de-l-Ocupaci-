import { Character } from "../../../types";
import ErrorMsg from "../../aux-components/error-message/ErrorMsg";
import MoreBtn from "../../aux-components/more-btn/MoreBtn";
import Card from "./card/Card";
import "./CharacterList.css";

type CharacterListProps = {
  characters: Character[];
  showMoreButton: boolean;
  isEmpty: boolean;
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
        <ErrorMsg />
      ) : (
        <div className="character-list__grid">
          {characters.map((character) => {
            return <Card key={character.id} character={character} />;
          })}
        </div>
      )}

      {showMoreButton && (
        <div className="character-list__container-btn">
          <MoreBtn handleShowMore={handleShowMore} loading={loading} />
        </div>
      )}
    </section>
  );
}
