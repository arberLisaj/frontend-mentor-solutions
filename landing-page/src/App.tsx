import { useState } from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import "./styles/styles.css";

const App = () => {
  const [activeAside, setActiveAside] = useState(false);
  return (
    <main>
      <Navbar handleClick={() => setActiveAside(true)} />
      <Hero
        asideState={activeAside}
        handleClose={() => setActiveAside(false)}
      />
    </main>
  );
};

export default App;
