const express = require("express");
const { getAllEmployees, createEmployee, updateEmployee, deleteEmployee } = require("../controllers/employeeController");
const router = express.Router();
/**
 * @swagger
 * /api/employees:
 *   get:
 *     summary: Get all employees
 *   post:
 *     summary: Create a new employee
 * /api/employees/{id}:
 *   put:
 *     summary: Update employee
 *   delete:
 *     summary: Delete employee
 */
router.get("/", getAllEmployees);
router.post("/", createEmployee);
router.put("/:id", updateEmployee);
router.delete("/:id", deleteEmployee);
module.exports = router;