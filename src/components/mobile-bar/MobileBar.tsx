import { memo } from "react";
import "./MobileBar.css";

export default memo(function MobileBar({
  handleOnCLick,
}: {
  handleOnCLick: () => void;
}) {
  return (
    <div className="mobile-bar">
      <button className="mobile-bar__btn" onClick={handleOnCLick}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
});
