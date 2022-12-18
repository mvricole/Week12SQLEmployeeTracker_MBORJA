// Application requires access to connection.js 
const connection = require("./connection");


class DB {
  constructor(connection) {
    this.connection = connection;
  }

  // Find all employees, join with roles and departments to display their roles, salaries, departments, and managers
  findAllEmployees() {
    return this.connection.promise().query(
      "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
    );
  }

  // Using similar logic, we use another promise to help find managers in the database. 
  findAllPossibleManagers(employeeId) {
    return this.connection.promise().query(
      "SELECT id, first_name, last_name FROM employee WHERE id != ?",
      employeeId
    );
  }

// The follow logic helps support employee creations and deletions. Key finder is using the employee id.
// Also includes logic to support updating individual employees and their manager. 
  createEmployee(employee) {
    return this.connection.promise().query("INSERT INTO employee SET ?", employee);
  }

  removeEmployee(employeeId) {
    return this.connection.promise().query(
      "DELETE FROM employee WHERE id = ?",
      employeeId
    );
  }

  updateEmployeeRole(employeeId, roleId) {
    return this.connection.promise().query(
      "UPDATE employee SET role_id = ? WHERE id = ?",
      [roleId, employeeId]
    );
  }

  updateEmployeeManager(employeeId, managerId) {
    return this.connection.promise().query(
      "UPDATE employee SET manager_id = ? WHERE id = ?",
      [managerId, employeeId]
    );
  }

  //This logic returns all the roles in the database when the user selects "View All Roles"
  findAllRoles() {
    return this.connection.promise().query(
      "SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department on role.department_id = department.id;"
    );
  }

  // Create job role logic 
  createRole(role) {
    return this.connection.promise().query("INSERT INTO role SET ?", role);
  }

  // Remove role logic 
  removeRole(roleId) {
    return this.connection.promise().query("DELETE FROM role WHERE id = ?", roleId);
  }

  // Find all departments logic 
  findAllDepartments() {
    return this.connection.promise().query(
      "SELECT department.id, department.name FROM department;"
    );
  }

  viewDepartmentBudgets() {
    return this.connection.promise().query(
      "SELECT department.id, department.name, SUM(role.salary) AS utilized_budget FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id GROUP BY department.id, department.name;"
    );
  }

  // Create a new department
  createDepartment(department) {
    return this.connection.promise().query("INSERT INTO department SET ?", department);
  }

  // Remove a department
  removeDepartment(departmentId) {
    return this.connection.promise().query(
      "DELETE FROM department WHERE id = ?",
      departmentId
    );
  }

  // Find all employees filtered by department logic 
  findAllEmployeesByDepartment(departmentId) {
    return this.connection.promise().query(
      "SELECT employee.id, employee.first_name, employee.last_name, role.title FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department department on role.department_id = department.id WHERE department.id = ?;",
      departmentId
    );
  }

  // Find all employees by manager ID logic 
  findAllEmployeesByManager(managerId) {
    return this.connection.promise().query(
      "SELECT employee.id, employee.first_name, employee.last_name, department.name AS department, role.title FROM employee LEFT JOIN role on role.id = employee.role_id LEFT JOIN department ON department.id = role.department_id WHERE manager_id = ?;",
      managerId
    );
  }
}

module.exports = new DB(connection);
