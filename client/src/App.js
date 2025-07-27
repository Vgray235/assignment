import React, { useState, useEffect } from "react";
import { getEmployees, addEmployee, updateEmployee, deleteEmployee } from "./api";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
export default function App() {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const fetchData = async () => { const { data } = await getEmployees(); setEmployees(data); };
  useEffect(() => { fetchData(); }, []);
  const handleSave = async (emp) => {
    if (selectedEmployee) await updateEmployee(selectedEmployee.id, emp);
    else await addEmployee(emp);
    setSelectedEmployee(null);
    fetchData();
  };
  const handleEdit = (emp) => setSelectedEmployee(emp);
  const handleDelete = async (id) => { if(window.confirm("Are you sure?")) { await deleteEmployee(id); fetchData(); } };
  return (
    <div className="container">
      <h1>Employee Management</h1>
      <EmployeeForm onSave={handleSave} selectedEmployee={selectedEmployee} onCancel={() => setSelectedEmployee(null)} />
      <EmployeeList employees={employees} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}