import { useState } from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import "./styles/styles.css";

const App = () => {
  const [activeAside, setActiveAside] = useState(true);
  return (
    <main>
      <Navbar handleClick={() => setActiveAside(!activeAside)} />
      <Hero asideState={activeAside} />
    </main>
  );
};

export default App;
