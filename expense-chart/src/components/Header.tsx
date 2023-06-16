import logo from "../images/logo.svg";
interface Props {
  balance: number;
}

const Header = ({ balance = 20 }: Props) => {
  return (
    <header>
      <div className="balance">
        <span>My balance</span>
        <h1>${balance.toFixed(2)}</h1>
      </div>
      <img src={logo} alt="logo" />
    </header>
  );
};

export default Header;
