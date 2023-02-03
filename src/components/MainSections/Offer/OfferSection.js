import SectionHeader from "../SectionHeader";
import ServicesContainer from "./ServicesContainer";

const OfferSection = () => {
  return (
    <section id="offer" className="offer-container">
      <div className="content-container">
        <SectionHeader
          className="offer-header"
          headerText="Czym zajmuje się nasza firma?"
        />
        <ServicesContainer />
      </div>
    </section>
  );
};

export default OfferSection;
