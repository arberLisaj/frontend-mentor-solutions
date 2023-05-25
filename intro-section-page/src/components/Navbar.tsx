import { useState } from "react";
import MenuToggleIcon from "../images/icon-menu.svg";
import ArrowDowm from "../images/icon-arrow-down.svg";
import ArrowUp from "../images/icon-arrow-up.svg";
import TodoList from "../images/icon-todo.svg";
import Calendar from "../images/icon-calendar.svg";
import Reminder from "../images/icon-reminders.svg";
import Planning from "../images/icon-planning.svg";
import GiandX from "../images/icon-close-menu.svg";
const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isActive, setActive] = useState(false);
  const [activeAside, setAsideState] = useState(false);
  return (
    <nav>
      <h1>snap</h1>

      <div className="toggle-menu" onClick={() => setAsideState(true)}>
        <img src={MenuToggleIcon} alt="menu icon" />
      </div>

      <div
        onClick={() => setAsideState(false)}
        className={activeAside ? "show tint" : "hide tint"}
      ></div>

      <aside className={activeAside ? "slide-in" : "slide-out"}>
        <div className="toggleAside" onClick={() => setAsideState(false)}>
          <img src={GiandX} alt="close aside" />
        </div>
        <p onClick={() => setIsClicked(!isClicked)}>
          Features <img src={isClicked ? ArrowUp : ArrowDowm} alt="arrow" />
        </p>
        <ul className={isClicked ? "show" : "hide"}>
          <li>
            <img src={TodoList} alt="todo list" />
            Todo List
          </li>
          <li>
            <img src={Calendar} alt="calendar" />
            Calendar
          </li>
          <li>
            <img src={Reminder} alt="reminder" />
            Reminders
          </li>
          <li>
            <img src={Planning} alt="planning" />
            Planning
          </li>
        </ul>

        <p onClick={() => setActive(!isActive)}>
          Company <img src={isActive ? ArrowUp : ArrowDowm} alt="arrow" />
        </p>
        <ul className={isActive ? "show" : "hide"}>
          <li>Home</li>
          <li>Our History</li>
          <li>Blog</li>
        </ul>

        <p>Careers</p>
        <p>About</p>

        <div className="login-container">
          <button>Login</button>
          <button>Register</button>
        </div>
      </aside>
    </nav>
  );
};

export default Navbar;
