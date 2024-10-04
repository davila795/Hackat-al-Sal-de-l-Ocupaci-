import { useEffect, useRef } from "react";

export default function SearchBar({ showbar }: { showbar: boolean }) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const input = inputRef.current;
    if (showbar && input) {
      input.focus();
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
        placeholder="Troba un personatge"
      />
      <label htmlFor="name">
        <i className="fa-solid fa-magnifying-glass fa-xl"></i>
      </label>
    </div>
  );
}
