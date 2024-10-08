import { ChangeEvent, FormEvent, useEffect, useRef } from "react";
import "./SearchBar.css";

type SearchBarProps = {
  showbar: boolean;
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOnSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

export default function SearchBar({
  showbar,
  handleOnChange,
  handleOnSubmit,
}: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (showbar) {
      inputRef.current?.focus();
    }
  }, [showbar]);

  return (
    <div className={`header__search-bar ${showbar && "active"}`}>
      <form className="header__search-bar__form" onSubmit={handleOnSubmit}>
        <div className="header__search-bar__form-group">
          <input
            className="header__search-bar__form-group__input"
            ref={inputRef}
            id="name"
            name="name"
            type="text"
            placeholder="Busca un personaje"
            onChange={handleOnChange}
          />
          <label
            className="header__search-bar__form-group__label"
            htmlFor="name"
          >
            <i className="fa-solid fa-magnifying-glass fa-xl"></i>
          </label>
        </div>
      </form>
    </div>
  );
}
