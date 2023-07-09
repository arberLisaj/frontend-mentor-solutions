interface Props {
  username: string;
  cardNumber: string;
  expDate: string;
  expYear: string;
  cvc: string;
}

const MobileCards = ({
  username,
  cardNumber,
  expDate,
  expYear,
  cvc,
}: Props) => {
  return (
    <section id="mobileCard">
      <div className="cards-wrapper">
        <div className="back-card card">
          <span id="back-number">{cvc}</span>
        </div>
        <div className="front-card card">
          <div className="ball-container">
            <div className="ball1"></div>
            <div className="ball2"></div>
          </div>
          <span id="card-number">
            {cardNumber ? cardNumber : 'xxxx xxxx xxxx xxxx'}
          </span>
          <div className="flex">
            <span id="name">{username ? username : "Jane AppleSeed"}</span>
            <span id="exp">
              {expDate ? expDate : '02'} / {expYear ? expYear : "27"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileCards;
