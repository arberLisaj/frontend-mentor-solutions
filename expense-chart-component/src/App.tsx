import Card from "./components/Card";
import Header from "./components/Header";
import "./Styles/styles.css";

const App = () => {
  return (
    <div>
      <main>
        <Header balance={921.48} />
        <Card
          mon="73px"
          tue="120px"
          wed="190px"
          thur="115px"
          fri="90px"
          sat="145.4px"
          sun="100px"
        />
      </main>
    </div>
  );
};

export default App;
