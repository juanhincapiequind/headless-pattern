import { useState } from "react";
import { Employee } from "../models/employee";

export const useEmployeeTable = (initialEmployees: Employee[]) => {
  const [employees, setEmployees] = useState(initialEmployees);

  const toggleEmployeeStatus = (id: number) => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((employee) =>
        employee.id === id
          ? { ...employee, isActive: !employee.isActive }
          : employee
      )
    );
  };

  return {employees, toggleEmployeeStatus}
};
