import React, { useState, useEffect } from "react";
export default function EmployeeForm({ onSave, selectedEmployee, onCancel }) {
  const [formData, setFormData] = useState({ name: "", email: "", department: "" });
  useEffect(() => { if (selectedEmployee) setFormData(selectedEmployee); else setFormData({ name: "", email: "", department: "" }); }, [selectedEmployee]);
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); onSave(formData); };
  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <input name="department" placeholder="Department" value={formData.department} onChange={handleChange} required />
      <button type="submit" className="save">{selectedEmployee ? "Update" : "Add"}</button>
      {selectedEmployee && (<button type="button" className="cancel" onClick={onCancel}>Cancel</button>)}
    </form>
  );
}