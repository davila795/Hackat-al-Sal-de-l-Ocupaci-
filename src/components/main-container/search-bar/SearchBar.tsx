import { ChangeEvent, FormEvent, memo, useCallback, useEffect, useRef, useState } from "react";
import "./SearchBar.css";
import MobileBar from "../../mobile-bar/MobileBar";

type SearchBarProps = {
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default memo(function SearchBar({ handleOnChange }: SearchBarProps) {
  const [showSearchBarMobile, setshowSearchBarMobile] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (showSearchBarMobile) {
      inputRef.current?.focus();
    }
  }, [showSearchBarMobile]);

  const handleOnSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setshowSearchBarMobile(false);
  }, []);

  const handleOnCLick = useCallback(() => {
    setshowSearchBarMobile(
      (prevshowSearchBarMobile) => !prevshowSearchBarMobile
    );
  }, []);

  return (
    <>
      <div className={`search-bar ${showSearchBarMobile && "active"}`}>
        <form className="search-bar__form" onSubmit={handleOnSubmit}>
          <div className="search-bar__form-group">
            <input
              className="search-bar__form-group__input"
              ref={inputRef}
              id="name"
              name="name"
              type="text"
              placeholder="Busca un personaje"
              onChange={handleOnChange}
            />
            <label
              className="search-bar__form-group__label"
              htmlFor="name"
            >
              <i className="fa-solid fa-magnifying-glass fa-xl"></i>
            </label>
          </div>
        </form>
      </div>
      
      <MobileBar handleOnCLick={handleOnCLick} />
    </>
  );
});
