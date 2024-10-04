export default function MobileBar({
  handleOnCLick,
}: {
  handleOnCLick: () => void;
}) {
  return (
    <div className="mobile-bar">
      <button className="btn-mobile" onClick={handleOnCLick}>
        <i className="fa-solid fa-magnifying-glass fa-xl"></i>
      </button>
    </div>
  );
}
