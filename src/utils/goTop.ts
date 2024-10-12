import React from "react";

export const goTop = (
  topRef: React.RefObject<HTMLDivElement>,
  e?: React.MouseEvent<HTMLButtonElement>
) => {
  const behavior: ScrollBehavior = e ? "smooth" : "auto";
  topRef.current?.scrollIntoView({ behavior });
};
