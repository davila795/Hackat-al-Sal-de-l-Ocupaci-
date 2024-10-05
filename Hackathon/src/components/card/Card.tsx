import "./Card.css"

export default function Card() {
  return (
    <div className="character-list__grid__card">
      <img
        src="/istockphoto-522001766-2048x2048.jpg"
        alt="Rick Sanchez"
        className="character-list__grid__card__img"
      />
      <h3 className="character-list__grid__card__title">Rick Sanchez</h3>
      <p className="character-list__grid__card__body">Human</p>
      <p className="character-list__grid__card__body">Earth (C-137)</p>
    </div>
  );
}
