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
        maxLength={20}
      />

      <label htmlFor="cardnumber">CARD NUMBER</label>
      <input
        id="cardnumber"
        value={cardNumber}
        onChange={(e) => {
          let value = "";
          value += e.target.value;
          if (+value >= 0) {
            setCardNumber(value.substring(0,16));
          }
        }}
        type="number"
        placeholder="e.g 1234 5678 9101 0000"
      />

      <div className="flex">
        <div className="exp-date">
          <div className="month-year">
            <label className="exp" htmlFor="exp">
              Exp Date (MM / YY)
            </label>
            <label htmlFor="cvcnumber">CVC</label>
            <input
              id="cvcnumber"
              maxLength={3}
              value={expDate}
              onChange={(e) => {
                let value = "";
                value += e.target.value;
                let trimValue = +value.substring(0, 2);
                if (trimValue >= 0) {
                  setExpDate(trimValue.toString());
                }
              }}
              type="number"
              placeholder="MM"
            />
            <input
              value={expYear}
              onChange={(e) => {
                let value = "";
                value += e.target.value;
                let trimValue = +value.substring(0, 2);
                if (trimValue >= 0) {
                  setExpYear(trimValue.toString());
                }
              }}
              type="number"
              placeholder="YY"
            />
            <input
              id="cvc"
              value={cvc}
              onChange={(e) => {
                let value = "";
                value += e.target.value;
                let trimValue = +value.substring(0, 3);
                if (trimValue >= 0) {
                  setCvc(trimValue.toString());
                }
              }}
              type="number"
              placeholder="e.g. 123"
            />
          </div>
        </div>
      </div>
      <button>confirm</button>
    </section>
  );
};

export default Form;
