import { useEffect, useState } from "react";
import { API, Character } from "../types";
import useDebounce from "./useDebounce";
import { API_URL } from "../config/apiConfig";

export const useCharacters = (name: string, page: number) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [showMoreButton, setShowMoreButton] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchCaracters = async (url: string) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data: API = await response.json();
        const characters = data.results;

        setShowMoreButton(data.info.pages > page);

        if (page > 1) {
          setCharacters((prevCharacters) => [...prevCharacters, ...characters]);
          return;
        }
        setCharacters(characters);
      } else {
        setCharacters([]);
        setShowMoreButton(false);
        console.error("Fetch failed");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCaractersDebounced = useDebounce({
    func: fetchCaracters,
    delay: 500,
  });

  useEffect(() => {
    fetchCaractersDebounced(`${API_URL}/?name=${name}&page=${page}`);
  }, [page, name]);

  return { characters, showMoreButton, loading };
};
