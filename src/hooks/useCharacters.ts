import { useEffect, useState } from "react";
import { Character } from "../types";
import { API_URL } from "../config/apiConfig";
import { fetchData } from "../utils/fetchData";

export const useCharacters = (name: string, page: number) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [showMoreButton, setShowMoreButton] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      const data = await fetchData(`${API_URL}/?name=${name}&page=${page}`);

      if (data) {
        const newCharacters = data.results;
        const numPages = data.info.pages;
        page === 1
          ? setCharacters(newCharacters)
          : setCharacters((prevCharacters) => [
              ...prevCharacters,
              ...newCharacters,
            ]);

        setShowMoreButton(numPages > page);
      } else {
        setCharacters([]);
        setShowMoreButton(false);
      }

      setLoading(false);
    };

    fetchCharacters();
  }, [page, name]);

  return { characters, showMoreButton, loading };
};
