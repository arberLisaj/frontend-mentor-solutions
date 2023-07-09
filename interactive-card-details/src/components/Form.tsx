interface Props {
  username: string;
  setUsername: (something: string) => void;
  cardNumber: string;
  setCardNumber: (something: string) => void;
  expDate: string;
  setExpDate: (something: string) => void;
  expYear: string;
  setExpYear: (something: string) => void;
  cvc: string;
  setCvc: (something: string) => void;
}

const Form = ({
  username,
  setUsername,
  cardNumber,
  setCardNumber,
  expDate,
  setExpDate,
  expYear,
  setExpYear,
  cvc,
  setCvc,
}: Props) => {
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
        id="cardnumber"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
        type="number"
        placeholder="e.g 1234 5678 9101 0000"
      />

      <div className="flex">
        <div className="exp-date">
          <div className="month-year">
            <label className="exp" htmlFor="exp">
              Exp Date (MM / YY)
            </label>
            <label>CVC</label>
            <input
              value={expDate}
              onChange={(e) => setExpDate(e.target.value)}
              type="number"
              placeholder="MM"
            />
            <input
              value={expYear}
              onChange={(e) => setExpYear(e.target.value)}
              type="number"
              placeholder="YY"
            />
            <input
              id="cvc"
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
              type="number"
              placeholder="e.g. 123"
            />
          </div>
        </div>
      </div>
      <button>Confirm</button>
    </section>
  );
};

export default Form;
