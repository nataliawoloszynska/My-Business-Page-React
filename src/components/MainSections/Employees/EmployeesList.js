import { EMPLOYEES_DATA } from "../../../data/EmployeesData";
import Employee from "./Employee";

const EmployeesList = () => {
  return (
    <div className="employees">
      {EMPLOYEES_DATA.map((employee) => (
        <Employee
          key={employee.id}
          isPhoto={employee.photo}
          name={employee.name}
          position={employee.position}
          description={employee.description}
        />
      ))}
    </div>
  );
};

export default EmployeesList;
