import Illustration from "../../images/illustration-working.svg";

const Hero = () => {
  return (
    <section id="hero">
      <div className="introduction">
        <h1>More than just shorter links</h1>
        <p>
          Build your band's recognition and get detailed insights on how your
          links are performing
        </p>

        <button>Get Started</button>
      </div>
      <div className="animation hide-on-mobile">
        <img src={Illustration} alt="illustration" />
      </div>
    </section>
  );
};

export default Hero;
