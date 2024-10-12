import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { useCharacters } from "../../hooks/useCharacters";
import { goTop } from "../../utils/goTop";
import GoTopBtn from "../aux-components/go-top-btn/GoTopBtn";
import SearchBar from "./search-bar/SearchBar";
import Spinner from "../aux-components/spinner/Spinner";
import CharacterList from "./character-list/CharacterList";

type MainContainerProps = {
  topPageRef: React.RefObject<HTMLDivElement>;
};

export default function MainContainer({ topPageRef }: MainContainerProps) {
  const [name, setName] = useState("");
  const [page, setPage] = useState(1);

  const debouncedName = useDebounce(name);

  const { characters, loading, showMoreButton } = useCharacters(
    debouncedName,
    page
  );

  useEffect(() => {
    goTop(topPageRef);
  }, [debouncedName]);

  const handleOnChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPage(1);
    setName(value);
  }, []);

  const handleShowMore = useCallback(() => {
    setPage((prevPage) => prevPage + 1);
  }, []);

  const isEmpty = characters.length === 0;

  return (
    <>
      <SearchBar handleOnChange={handleOnChange} />

      {loading && page === 1 ? (
        <Spinner />
      ) : (
        <CharacterList
          characters={characters}
          handleShowMore={handleShowMore}
          isEmpty={isEmpty}
          loading={loading}
          showMoreButton={showMoreButton}
        />
      )}

      {!isEmpty && <GoTopBtn topRef={topPageRef} />}
    </>
  );
}
