import { useEffect, useState } from "react";
import { API, Character } from "../types";
import useDebounce from "./useDebounce";
import { API_URL } from "../config/apiConfig";

export const useCharacters = (name: string, page: number) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [showMoreButton, setShowMoreButton] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchCaracters = async (url: string) => {
    try {
      const response = await fetch(url);
      const data: API = await response.json();
      return response.ok ? data : null;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const fetchCaractersDebounced = useDebounce({
    func: fetchCaracters,
    delay: 500,
  });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await fetchCaractersDebounced(
        `${API_URL}/?name=${name}&page=${page}`
      );

      if (data) {
        const characters = data.results;
        const numPages = data.info.pages;
        page === 1
          ? setCharacters(characters)
          : setCharacters((prevCharacters) => [
              ...prevCharacters,
              ...characters,
            ]);

        setShowMoreButton(numPages > page);
      } else {
        setCharacters([]);
        setShowMoreButton(false);
      }

      setLoading(false);
    };

    fetchData();
  }, [page, name]);

  return { characters, showMoreButton, loading };
};
