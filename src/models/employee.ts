export interface Employee {
    id: number;
    name: string;
    age: number;
    position: string;
    isActive: boolean;
}

export interface EmployeeTableProps {
    employees: Employee[];
    onToggleStatus: (id: number) => void;
}