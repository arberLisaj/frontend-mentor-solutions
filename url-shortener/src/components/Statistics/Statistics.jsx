import chart from "../../images/icon-brand-recognition.svg";
import detail from "../../images/icon-detailed-records.svg";
import customizable from "../../images/icon-fully-customizable.svg";
import Card from "./Card";
const Statistics = () => {
  return (
    <section id="advanced-statistics">
      <h2>Advanced Statistics</h2>
      <p>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>

      <div className="flex-container">
        <Card
          image={chart}
          title={"Brand Recognition"}
          description={
            "Boost your band recognition with each click. Generic links dont mean a thing. Branded links help instil confidence in your content"
          }
        />
        <Card
          image={detail}
          title={"Detailed Records"}
          description={
            "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better desicions "
          }
        />
        <Card
          image={customizable}
          title={"Fully Customizable"}
          description={
            "Improve brand awareness and link discoverability throught customizeable links, supercharging audience engagements"
          }
        />
      </div>
    </section>
  );
};

export default Statistics;
