import SectionHeader from "../SectionHeader";
import EmployeesList from "./EmployeesList";

const EmployeesSection = () => {
  return (
    <section id="employees" className="employees-container">
      <div className="content-container">
        <SectionHeader
          className="employees-header"
          headerText="Nasi specjaliści"
        />
        <EmployeesList />
      </div>
    </section>
  );
};

export default EmployeesSection;
