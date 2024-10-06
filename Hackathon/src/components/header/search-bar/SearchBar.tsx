import { ChangeEvent, useEffect, useRef } from "react";
import "./SearchBar.css";

type SearchBarProps = {
  showbar: boolean;
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchBar({ showbar, handleOnChange }: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (showbar) {
      inputRef.current?.focus();
    }
  }, [showbar]);

  return (
    <div className={`header__search-bar ${showbar && "active"}`}>
      <input
        className="header__search-bar__input"
        ref={inputRef}
        id="name"
        name="name"
        type="text"
        placeholder="Busca un personaje"
        onChange={handleOnChange}
      />
      <label htmlFor="name">
        <i className="fa-solid fa-magnifying-glass fa-xl"></i>
      </label>
    </div>
  );
}
