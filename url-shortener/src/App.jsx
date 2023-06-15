import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import LinkInput from "./components/LinkInput/LinkInput";
import Statistics from "./components/Statistics/Statistics";
import Footer from "./components/Footer/Footer";
import "./styles/styles.css";

const App = () => {
  return (
    <main>
      <Header />
      <Hero />
      <LinkInput />
      <Statistics />
      <Footer />
    </main>
  );
};

export default App;
