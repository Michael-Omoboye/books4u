import { useState } from "react";
import "./App.css";
import { Navbar } from "./Components/NavbarAndFooter/Navbar";
import { ExploreTopBooks } from "./Components/HomePage/ExploreTopBooks";
import { Carousel } from "./Components/HomePage/Carousel";
import { Heros } from "./Components/HomePage/Heros";
import { LibrarySevices } from "./Components/HomePage/LibrarySevices";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <ExploreTopBooks />
      <Carousel />
      <Heros />
      <LibrarySevices />
    </>
  );
}

export default App;
