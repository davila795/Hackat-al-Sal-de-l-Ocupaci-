import { Character } from "../../../types";
import "./Card.css";

export default function Card({ character }: { character: Character }) {
  return (
    <div className="character-list__grid__card">
      <img
        src={character.image}
        alt={character.name}
        className="character-list__grid__card__img"
      />
      <div className="character-list__grid__card__content">
        <h3 className="character-list__grid__card__content__title">
          {character.name}
        </h3>
        <p className="character-list__grid__card__content__body">
          <span
            className={`character-list__grid__card__content__body__species-diff ${
              character.species === "Human"
                ? "character-list__grid__card__content__body__species-diff--human"
                : "character-list__grid__card__content__body__species-diff--alien"
            }`}
          ></span>
          {character.species}
        </p>
        <p className="character-list__grid__card__content__body">
          {character.origin.name}
        </p>
      </div>
    </div>
  );
}
