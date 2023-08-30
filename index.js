const inquirer = require("inquirer");
const { table } = require("table");
const db = require("./config/connection");
const showTable = require("./utility/table");
const { addDepartment, addRole, addEmployee, updateEmployeeRole, viewAllDepartments, viewAllRoles, viewAllEmployees, viewEmployeesByDepartment, viewEmployeesByManager, viewDepartmentBudget, deleteDepartment, deleteRole, deleteEmployee, exit } = require("./utility/queries");
const mainMenu = require("./utility/mainMenu");

async function init() {
    let exitProgram = false;
    while (!exitProgram) {
        let { action } = await mainMenu();
        switch (action) {
            case "View All Departments":
                showTable(await viewAllDepartments());
                break;
            case "View All Roles":
                showTable(await viewAllRoles());
                break;
            case "View All Employees":
                showTable(await viewAllEmployees());
                break;
            case "View Employees By Department":
                showTable(await viewEmployeesByDepartment());
                break;
            case "View Employees By Manager":
                showTable(await viewEmployeesByManager());
                break;
            case "View Department Budget":
                showTable(await viewDepartmentBudget());
                break;
            case "Add Department":
                await addDepartment();
                break;
            case "Add Role":
                await addRole();
                break;
            case "Add Employee":
                await addEmployee();
                break;
            case "Update Employee Role":
                await updateEmployeeRole();
                break;
            case "Delete Department":
                await deleteDepartment();
                break;
            case "Delete Role":
                await deleteRole();
                break;
            case "Delete Employee":
                await deleteEmployee();
                break;
            case "Exit":
                exitProgram = true;
                exit();
                break;
        }
    }
}

init();