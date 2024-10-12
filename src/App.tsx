import Header from "./components/header/Header";
import MainContainer from "./components/main-container/MainContainer";
import { useRef } from "react";

function App() {
  const topPageRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={topPageRef} className="container">
      <Header />
      <MainContainer topPageRef={topPageRef} />
    </div>
  );
}

export default App;
