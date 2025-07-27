const swaggerJsdoc = require("swagger-jsdoc");
const options = {
  definition: {
    openapi: "3.0.0",
    info: { title: "Employee Profile Management API", version: "1.0.0" },
    servers: [{ url: "http://localhost:5000" }],
  },
  apis: ["./routes/*.js"],
};
module.exports = swaggerJsdoc(options);