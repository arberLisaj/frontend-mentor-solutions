import { useState } from "react";
import Form from "./components/Form";
import MobileCards from "./components/MobileCards";
import "./styles/styles.css";
import DesktopCards from "./components/DesktopCards";
const App = () => {
  const [username, setUsername] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expDate, setExpDate] = useState("");
  const [expYear, setExpYear] = useState("");
  const [cvc, setCvc] = useState("");
  return (
    <main>
      <MobileCards
        username={username}
        cardNumber={cardNumber}
        expDate={expDate}
        expYear={expYear}
        cvc={cvc}
      />
      <DesktopCards
        cardNumber={cardNumber}
        cardName={username}
        expDate={expDate}
        expYear={expYear}
        backNumber={cvc}
      />
      <Form
        username={username}
        setUsername={(data) => setUsername(data)}
        cardNumber={cardNumber}
        setCardNumber={(data) => setCardNumber(data)}
        expDate={expDate}
        setExpDate={(data) => setExpDate(data)}
        expYear={expYear}
        setExpYear={(data) => setExpYear(data)}
        cvc={cvc}
        setCvc={(data) => setCvc(data)}
      />
    </main>
  );
};

export default App;
