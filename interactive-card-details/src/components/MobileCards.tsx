interface Props {
  username: string;
  cardNumber: string;
}

const MobileCards = ({ username, cardNumber }: Props) => {
  return (
    <section id="mobileCard">
      <div className="cards-wrapper">
        <div className="back-card card">
          <span id="back-number">000</span>
        </div>
        <div className="front-card card">
          <div className="ball-container">
            <div className="ball1"></div>
            <div className="ball2"></div>
          </div>
          <span id="card-number">
            {cardNumber && cardNumber.length <= 16
              ? cardNumber
              : "0000 0000 0000 0000"}
          </span>
          <div className="flex">
            <span id="name">{username ? username : "Jane AppleSeed"}</span>
            <span id="exp">00/00</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileCards;
