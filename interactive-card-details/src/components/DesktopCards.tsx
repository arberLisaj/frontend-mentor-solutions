interface Props {
  cardNumber: string;
  cardName: string;
  expDate: string;
  expYear: string;
  backNumber: string;
}

const DesktopCards = ({
  cardNumber,
  cardName,
  expDate,
  expYear,
  backNumber,
}: Props) => {
  return (
    <section id="desktop-cards" className="hide-on-mobile">
      <div className="front-card card">
        <div className="ball-container">
          <div className="ball1"></div>
          <div className="ball2"></div>
        </div>
        <span id="card-number">
          {cardNumber ? cardNumber : "xxxx xxxx xxxx xxxx"}
        </span>
        <div className="flex">
          <span id="name">{cardName ? cardName : "Jane AppleSeed"}</span>
          <span id="exp">
            {expDate ? expDate : "02"} / {expYear ? expYear : "27"}
          </span>
        </div>
      </div>
      <div className="back-card card">
        <span id="back-number">{backNumber ? backNumber : "000"}</span>
      </div>
    </section>
  );
};

export default DesktopCards;
