import { ChangeEvent, memo } from "react";
import SearchBar from "./search-bar/SearchBar";

import "./Header.css";

type HeaderProps = {
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default memo(function Header({ handleOnChange }: HeaderProps) {
  return (
    <header className="header">
      <h1 className="header__title font-rick">Rick Y Morty</h1>
      <SearchBar handleOnChange={handleOnChange} />
    </header>
  );
});
