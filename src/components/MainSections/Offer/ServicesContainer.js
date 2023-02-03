import ServiceBox from "./ServiceBox";
import { SERVICES_DATA } from "../../../data/ServicesData";

const ServicesContainer = () => {
  return (
    <div className="services-container">
      {SERVICES_DATA.map((service) => (
        <ServiceBox
          key={service.id}
          text={service.service}
          isNew={service.isNew}
        />
      ))}
    </div>
  );
};

export default ServicesContainer;
