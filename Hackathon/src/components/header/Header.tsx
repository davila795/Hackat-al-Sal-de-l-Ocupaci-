import { ChangeEvent, FormEvent } from "react";
import SearchBar from "./search-bar/SearchBar";

import "./Header.css";

type HeaderProps = {
  showBar: boolean;
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOnSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

export default function Header({
  showBar,
  handleOnChange,
  handleOnSubmit,
}: HeaderProps) {
  return (
    <header className="header">
      <h1 className="header__title font-rick">Rick Y Morty</h1>
      <SearchBar
        showbar={showBar}
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
      />
    </header>
  );
}
