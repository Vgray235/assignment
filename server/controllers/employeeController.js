const employees = require("../models/employeeModel");
const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);
exports.getAllEmployees = (req, res) => res.json(employees);
exports.createEmployee = (req, res) => {
  const { name, email, department } = req.body;
  if (!name || !email || !department)
    return res.status(400).json({ message: "All fields are required" });
  if (!isValidEmail(email))
    return res.status(400).json({ message: "Invalid email format" });
  const newEmployee = {
    id: employees.length ? employees[employees.length - 1].id + 1 : 1,
    name, email, department
  };
  employees.push(newEmployee);
  res.status(201).json(newEmployee);
};
exports.updateEmployee = (req, res) => {
  const { id } = req.params;
  const { name, email, department } = req.body;
  const employee = employees.find((e) => e.id === parseInt(id));
  if (!employee) return res.status(404).json({ message: "Employee not found" });
  if (email && !isValidEmail(email))
    return res.status(400).json({ message: "Invalid email format" });
  employee.name = name || employee.name;
  employee.email = email || employee.email;
  employee.department = department || employee.department;
  res.json(employee);
};
exports.deleteEmployee = (req, res) => {
  const { id } = req.params;
  const index = employees.findIndex((e) => e.id === parseInt(id));
  if (index === -1) return res.status(404).json({ message: "Employee not found" });
  employees.splice(index, 1);
  res.json({ message: "Employee deleted successfully" });
};