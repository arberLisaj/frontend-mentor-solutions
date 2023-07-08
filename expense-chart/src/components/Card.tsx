interface Props {
  mon?: string;
  tue?: string;
  wed?: string;
  thur?: string;
  fri?: string;
  sat?: string;
  sun?: string;
  percentage?: number;
}

const Card = ({
  // pre defining the height
  mon = "50px",
  tue = "50px",
  wed = "50px",
  thur = "50px",
  fri = "50px",
  sat = "50px",
  sun = "50px",
  percentage = 2.4,
}: Props) => {
  let monPrice = mon.substring(0, mon.length - 2);
  let tuePrice = tue.substring(0, tue.length - 2);
  let wedPrice = wed.substring(0, wed.length - 2);
  let thurPrice = thur.substring(0, thur.length - 2);
  let friPrice = fri.substring(0, fri.length - 2);
  let satPrice = sat.substring(0, sat.length - 2);
  let sunPrice = sun.substring(0, sun.length - 2);
  let monthPrice =
    +monPrice +
    +tuePrice +
    +wedPrice +
    +thurPrice +
    +friPrice +
    +satPrice +
    +sunPrice;
  return (
    <section>
      <h1 id="spending">Spending - Last 7 Days</h1>
      <article>
        <div className="mon ">
          <div style={{ height: mon }} className="candle">
            <div className="hover">${monPrice}</div>
          </div>
          <p>Mon</p>
        </div>
        <div className="tue">
          <div style={{ height: tue }} className="candle">
            <div className="hover">${tuePrice}</div>{" "}
          </div>
          <p>tue</p>
        </div>
        <div className="wed">
          <div style={{ height: wed }} className="candle">
            <div className="hover">${wedPrice}</div>{" "}
          </div>
          <p>wed</p>
        </div>
        <div className="thur">
          <div style={{ height: thur }} className="candle">
            <div className="hover">${thurPrice}</div>
          </div>
          <p>thu</p>
        </div>
        <div className="fri">
          <div style={{ height: fri }} className="candle">
            <div className="hover">${friPrice}</div>{" "}
          </div>
          <p>fri</p>
        </div>
        <div className="sat">
          <div style={{ height: sat }} className="candle">
            <div className="hover">${satPrice}</div>{" "}
          </div>
          <p>sat</p>
        </div>
        <div className="sun">
          <div style={{ height: sun }} className="candle">
            <div className="hover">${sunPrice}</div>{" "}
          </div>
          <p>sun</p>
        </div>
      </article>
      <hr />
      <footer>
        <div className="monthly">
          <span>Total this month</span>
          <h1>${monthPrice.toFixed(2)}</h1>
        </div>
        <div className="lastMonth">
          <p>+{percentage}%</p>
          <span>from last month</span>
        </div>
      </footer>
    </section>
  );
};

export default Card;
