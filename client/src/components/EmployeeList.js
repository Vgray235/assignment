export default function EmployeeList({ employees, onEdit, onDelete }) {
  return (
    <div>{employees.map((emp) => (
      <div key={emp.id} className="employee-card">
        <div>
          <strong>{emp.name}</strong><br />
          {emp.email}<br />
          <small>{emp.department}</small>
        </div>
        <div>
          <button className="edit" onClick={() => onEdit(emp)}>Edit</button>
          <button className="delete" onClick={() => onDelete(emp.id)}>Delete</button>
        </div>
      </div>
    ))}</div>
  );
}