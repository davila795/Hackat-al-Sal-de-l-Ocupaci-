import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { API_URL } from "./config/apiConfig";
import useDebounce from "./hooks/useDebounce";
import SearchBar from "./components/search-bar/SearchBar";
import MobileBar from "./components/mobile-bar/MobileBar";
import Card from "./components/card/Card";

import { API, Character } from "./types";

import "./App.css";

function App() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [showBar, setShowBar] = useState(false);
  const [name, setName] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchCaractersDebounced(API_URL);
  }, [page]);

  const fetchCaracters = async (url: string) => {
    try {
      const response = await fetch(url);
      const data: API = await response.json();
      setCharacters(data.results);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const fetchCaractersDebounced = useDebounce({
    func: fetchCaracters,
    delay: 500,
  });

  const handleOnCLick = () => {
    setShowBar((prevShowBar) => !prevShowBar);
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const url = value === "" ? API_URL : `${API_URL}/?name=${value}`;
    fetchCaractersDebounced(url);
    setName(value);
  };

  return (
    <div className="container">
      <header className="header">
        <h1 className="header__title font-rick">Rick Y Morty</h1>
        <SearchBar showbar={showBar} handleOnChange={handleOnChange} />
      </header>

      <section className="character-list">
        <div className="character-list__title">
          <h2 className="character-list__title__text font-rick">
            Lista de personatges
          </h2>
          <div className="character-list__title__decoration"></div>
        </div>
        <div className="character-list__grid">
          {characters ? (
            characters.map((character) => {
              return <Card key={character.id} character={character} />;
            })
          ) : (
            <p className="font-rick">No se encontraron resultados</p>
          )}
        </div>
        <button>Ver más...</button>
      </section>

      <MobileBar handleOnCLick={handleOnCLick} />
    </div>
  );
}

export default App;
