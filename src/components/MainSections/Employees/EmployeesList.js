import { employeesData } from "../../../data/EmployeesData";
import Employee from "./Employee";

const EmployeesList = () => {
  return (
    <div className="employees">
      {employeesData.map((employee) => (
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
