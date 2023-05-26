import MobileImage from "../../images/illustration-sign-up-mobile.svg";
import DesktopImage from "../../images/illustration-sign-up-desktop.svg";
import listSuccess from "../../images/icon-list.svg";
const Form = () => {
  return (
    <section id="form">
      <picture>
        <source media="(max-width:750px)" srcSet={MobileImage} />
        <source media="(min-width:750px)" srcSet={DesktopImage} />
        {/* <img src={MobileImage} alt="drawing animation" /> */}
        <img src={DesktopImage} alt="drawing animation" />
      </picture>
      <section className="left-desktop-container">
        <h1>Stay Updated</h1>
        <p>Join 60,000 product managers receiving monthly updates on:</p>
        <ul>
          <li>
            <img src={listSuccess} alt="tick" />
            <p>Product discovery and building what matters </p>
          </li>
          <li>
            <img src={listSuccess} alt="tick" />
            <p>Measuring to ensure updates are a success</p>
          </li>
          <li>
            <img src={listSuccess} alt="tick" />
            <p>And much more!</p>
          </li>
        </ul>
        <form className="input-container">
          <label htmlFor="email">
            <span>Email address</span>
            <span>Error</span>
          </label>
          <input id="email" type="email" />
          <button>Subscribe to monthly newsletter</button>
        </form>
      </section>
    </section>
  );
};

export default Form;
