import React, { useCallback, useEffect } from "react";

type GoTopBtnProps = {
  isEmpty: boolean;
  debouncedName: string;
  topRef: React.RefObject<HTMLDivElement>;
};

export default function GoTopBtn({
  isEmpty,
  debouncedName,
  topRef,
}: GoTopBtnProps) {
  const goToTop = useCallback((e?: React.MouseEvent<HTMLButtonElement>) => {
    let behavior: ScrollBehavior = "auto";
    if (e) {
      e.preventDefault();
      behavior = "smooth";
    }

    topRef.current?.scrollIntoView({ behavior });
  }, []);

  useEffect(() => {
    goToTop();
  }, [debouncedName, goToTop]);

  return (
    !isEmpty && (
      <button className="btn--go-top" onClick={(e) => goToTop(e)}>
        <i className="fa-solid fa-circle-up"></i>
      </button>
    )
  );
}
