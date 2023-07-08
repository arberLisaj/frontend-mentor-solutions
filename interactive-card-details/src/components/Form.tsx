interface Props {
  username: string;
  setUsername: (something: string) => void;
  cardNumber: string;
  setCardNumber: (something: string) => void;
}

const Form = ({ username, setUsername, cardNumber, setCardNumber }: Props) => {
  return (
    <section id="form">
      <label htmlFor="cardholder">CARDHOLDER NAME</label>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        id="cardholder"
        type="text"
        placeholder="e.g. Jane AppleSeed"
      />

      <label htmlFor="cardnumber">CARD NUMBER</label>
      <input
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
        type="number"
        placeholder="e.g 1234 5678 9101 0000"
      />

      <div className="flex">
        <div className="exp-date">
          <div className="month-year">
            <label id="exp" htmlFor="exp">
              Exp Date (MM / YY)
            </label>
            <label htmlFor="cvc">CVC</label>
            <input id="exp" type="number" placeholder="MM" />
            <input type="number" placeholder="YY" />
            <input id="cvc" type="number" placeholder="e.g. 123" />
          </div>
        </div>
      </div>
      <button>confirm</button>
    </section>
  );
};

export default Form;
