import React, { useEffect, useState } from "react";
import axios from "axios";
import DesktopPatternDivider from "./images/pattern-divider-desktop.svg";
import MobilePatternDivider from "./images/pattern-divider-mobile.svg";
import DiceSVG from "./images/icon-dice.svg";
import "./styles.css";
const App = () => {
  const [adviceData, setAdviceData] = useState("");

  const getAdvice = async () => {
    const response = await axios.get("https://api.adviceslip.com/advice");
    const advice = await response.data.slip;
    setAdviceData(advice);
  };

  useEffect(() => {
    const controller = new AbortController();
    getAdvice();
    return () => controller.abort();
  }, []);

  return (
    <main>
      <p>Advice #{adviceData.id}</p>
      <h1>{adviceData.advice}</h1>

      <picture id="image">
        <source media="(min-width:550px)" srcSet={DesktopPatternDivider} />
        <img src={MobilePatternDivider} alt="devider" />
      </picture>

      <button onClick={getAdvice}>
        <img src={DiceSVG} alt="animated dice" />
      </button>
    </main>
  );
};

export default App;
