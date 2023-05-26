import DesktopHeroBackground from "../../images/image-hero-desktop.png";
import MobileHeroBackground from "../../images/image-hero-mobile.png";
// sponsors
import DataBlitz from "../../images/client-databiz.svg";
import AudioPhine from "../../images/client-audiophile.svg";
import Meet from "../../images/client-meet.svg";
import Maker from "../../images/client-maker.svg";
// close image for the aside
import GiandX from "../../images/icon-close-menu.svg";

interface Props {
  asideState: boolean;
  handleClose: () => void;
}
const Hero = ({ asideState, handleClose }: Props) => {
  return (
    <section id="hero">
      <aside className={asideState ? "slide-in" : "slide-out "}>
        <div className="close-aside" onClick={handleClose}>
          <img src={GiandX} alt="close" />
        </div>

        <p style={{ marginTop: "50px" }}>
          This feature is not completed because i have a lot more important
          stuff to learn than finish a washed aside {":) "}
        </p>
      </aside>
      <picture>
        <source media="(max-width:940px)" srcSet={MobileHeroBackground} />
        <source media="(min-width:940px)" srcSet={DesktopHeroBackground} />
        <img src={MobileHeroBackground} alt="hero" />
      </picture>
      <div className="content">
        <h1>
          <span>Make</span> remote work
        </h1>
        <p>
          Get your team in sync , no matter your location . Streamline processes
          , create team rituals , and watch productivity soar.
        </p>
        <button>Learn More</button>
        <ul>
          <li>
            <img src={DataBlitz} alt="data blitz" />
          </li>
          <li>
            <img src={AudioPhine} alt="audio phine" />
          </li>
          <li>
            <img src={Meet} alt="meet" />
          </li>
          <li>
            <img src={Maker} alt="maker" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
