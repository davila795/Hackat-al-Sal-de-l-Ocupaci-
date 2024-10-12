import "./MoreBtn.css";

type MoreBtnProps = {
  handleShowMore: () => void;
  loading: boolean;
};

export default function MoreBtn({ handleShowMore, loading }: MoreBtnProps) {
  return (
    <button className="character-list__btn--more" onClick={handleShowMore}>
      {loading ? <div className="spinning-loader"></div> : <p>Ver más...</p>}
    </button>
  );
}
