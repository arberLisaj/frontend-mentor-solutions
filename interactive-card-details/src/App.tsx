import { useState } from "react";
import Form from "./components/Form";
import MobileCards from "./components/MobileCards";
import "./styles/styles.css";
const App = () => {
  const [username, setUsername] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  return (
    <main>
      <MobileCards username={username} cardNumber={cardNumber} />
      <Form
        username={username}
        setUsername={(data) => setUsername(data)}
        cardNumber={cardNumber}
        setCardNumber={(data) => setCardNumber(data)}
      />
    </main>
  );
};

export default App;
