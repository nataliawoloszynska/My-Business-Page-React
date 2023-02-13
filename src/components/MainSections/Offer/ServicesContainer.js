import ServiceBox from "./ServiceBox";
import { servicesData } from "../../../data/ServicesData";

const ServicesContainer = () => {
  return (
    <div className="services-container">
      {servicesData.map((service) => (
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
