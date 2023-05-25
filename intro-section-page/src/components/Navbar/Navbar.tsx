import { useState } from "react";
import MenuToggleIcon from "../../images/icon-menu.svg";
import ArrowDowm from "../../images/icon-arrow-down.svg";
import ArrowUp from "../../images/icon-arrow-up.svg";
import TodoList from "../../images/icon-todo.svg";
import Calendar from "../../images/icon-calendar.svg";
import Reminder from "../../images/icon-reminders.svg";
import Planning from "../../images/icon-planning.svg";
// import GiandX from "../images/icon-close-menu.svg";

interface Props {
  handleClick: () => void;
}
const Navbar = ({ handleClick }: Props) => {
  const [activeFeatures, setActiveFeatures] = useState(false);
  const [activeCompany, setActiveCompany] = useState(false);
  return (
    <nav>
      <div className="logo-and-ul">
        <h1>snap</h1>

        <ul className="desktop-navigation">
          <li onClick={() => setActiveFeatures(!activeFeatures)}>
            Features
            <img src={activeFeatures ? ArrowUp : ArrowDowm} alt="arrow" />
            <ul className={activeFeatures ? "show dropdown" : "hide dropdown"}>
              <li>
                <img src={TodoList} alt="todo list" /> Todo List
              </li>
              <li>
                <img src={Calendar} alt="calendar" /> Calendar
              </li>
              <li>
                <img src={Reminder} alt="reminder" /> Reminder
              </li>
              <li>
                <img src={Planning} alt="planning" /> Planning
              </li>
            </ul>
          </li>
          <li onClick={() => setActiveCompany(!activeCompany)}>
            Company
            <ul className={activeCompany ? "show dropdown" : "hide dropdown"}>
              <li>History</li>
              <li>Team</li>
              <li>Blog</li>
            </ul>
            <img src={activeCompany ? ArrowUp : ArrowDowm} alt="arrow" />
          </li>
          <li>Careers</li>
          <li>About</li>
        </ul>
      </div>

      <div className="buttons-container desktop-navigation">
        <button>Login</button>
        <button>Register</button>
      </div>
      <div className="mobile-menu-toggle" onClick={handleClick}>
        <img src={MenuToggleIcon} alt="menu toggler" />
      </div>
    </nav>
  );
};

export default Navbar;
