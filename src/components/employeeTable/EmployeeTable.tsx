import { EmployeeTableProps } from "../../models/employee";

const EmployeeTable: React.FC<EmployeeTableProps> = ({
  employees,
  onToggleStatus,
}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Position</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr key={employee.id}>
            <td>{employee.name}</td>
            <td>{employee.age}</td>
            <td>{employee.position}</td>
            <td>{employee.isActive ? "Active" : "Inactive"}</td>
            <td>
              <button onClick={() => onToggleStatus(employee.id)}>
                Toggle Status
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
