import facebook from "../../images/icon-facebook.svg";
import twitter from "../../images/icon-twitter.svg";
import pinterest from "../../images/icon-pinterest.svg";
import instagram from "../../images/icon-instagram.svg";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <footer>
        <h2>Shortly</h2>

        <ul className="list">
          <li>Features</li>
          <li>Link Shortening</li>
          <li>Branded Links</li>
          <li>Analytics</li>
        </ul>
        <ul className="list">
          <li>Features</li>
          <li>Link Shortening</li>
          <li>Branded Links</li>
          <li>Analytics</li>
        </ul>
        <ul className="list">
          <li>Company</li>
          <li>About</li>
          <li>Our Team</li>
          <li>Careers</li>
          <li>Contact</li>
        </ul>
        <ul className="socials">
          <li>
            <img src={facebook} alt="facebook icon" />
          </li>
          <li>
            <img src={twitter} alt="twitter icon" />
          </li>
          <li>
            <img src={pinterest} alt="facebook icon" />
          </li>
          <li>
            <img src={instagram} alt="instagram icon" />
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
