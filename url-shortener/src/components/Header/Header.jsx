import { useState } from "react";
import menu from "../../images/menu.svg";

const Header = () => {
  const [asideState, setAsideState] = useState(true);
  return (
    <header>
      <div className="left-container">
        <h1>Shortly</h1>
        <ul className="hide-on-mobile">
          <li>Features</li>
          <li>pricing</li>
          <li>Resources</li>
        </ul>
      </div>

      <div className="login-section hide-on-mobile">
        <button>Login</button>
        <button>Sign Up</button>
      </div>
      <div
        className="menu-toggle hide-on-desktop"
        onClick={() => setAsideState(!asideState)}
      >
        <img src={menu} alt="menu" />
      </div>

      <aside
        className={
          asideState ? "slideAside hide-on-desktop" : "slideOut hide-on-desktop"
        }
      >
        <ul>
          <li>Feature</li>
          <li>Prices</li>
          <li>Resources</li>
          <li><hr /></li>
          <li>
            <button>Login</button>
          </li>
          <li>
            <button>Sign Up</button>
          </li>
        </ul>
      </aside>
    </header>
  );
};

export default Header;
