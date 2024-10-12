import { memo } from "react";
import "./Header.css";

export default memo(function Header() {
  return (
    <header className="header">
      <h1 className="header__title font-rick">Rick Y Morty</h1>
    </header>
  );
});
