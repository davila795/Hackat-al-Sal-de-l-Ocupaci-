import React from "react";
import { goTop } from "../../utils/goTop";
import "./GoTop.css";

type GoTopBtnProps = {
  topRef: React.RefObject<HTMLDivElement>;
};

export default function GoTopBtn({ topRef }: GoTopBtnProps) {
  return (
    <button className="btn--go-top" onClick={(e) => goTop(topRef, e)}>
      <i className="fa-solid fa-circle-up"></i>
    </button>
  );
}
