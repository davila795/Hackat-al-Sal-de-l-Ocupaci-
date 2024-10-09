import { ChangeEvent, FormEvent, memo } from "react";
import SearchBar from "./search-bar/SearchBar";

import "./Header.css";

type HeaderProps = {
  showSearchBarMobile: boolean;
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOnSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

export default memo(function Header({
  showSearchBarMobile,
  handleOnChange,
  handleOnSubmit,
}: HeaderProps) {
  return (
    <header className="header">
      <h1 className="header__title font-rick">Rick Y Morty</h1>
      <SearchBar
        showSearchBarMobile={showSearchBarMobile}
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
      />
    </header>
  );
});
