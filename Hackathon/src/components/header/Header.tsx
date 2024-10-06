import { ChangeEvent } from "react";
import SearchBar from "./search-bar/SearchBar";

import "./Header.css";

type HeaderProps = {
  showBar: boolean;
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function Header({ showBar, handleOnChange }: HeaderProps) {
  return (
    <header className="header">
      <h1 className="header__title font-rick">Rick Y Morty</h1>
      <SearchBar showbar={showBar} handleOnChange={handleOnChange} />
    </header>
  );
}
