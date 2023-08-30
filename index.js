const inquirer = require("inquirer");
const showTable = require("./utility/table");
const { addDepartment, addRole, addEmployee, updateEmployeeRole, viewAllDepartments, viewAllRoles, viewAllEmployees, viewEmployeesByDepartment, viewEmployeesByManager, viewDepartmentBudget, deleteDepartment, deleteRole, deleteEmployee, exit } = require("./utility/mainMenu");
const mainMenu = require("./utility/mainMenu");

function mainMenu() {
    return inquirer.prompt([
        {
            message: "What would you like to do?",
            type: "list",
            name: "program",
            choices: [
                "View All Departments",
                "View All Roles",
                "View All Employees",
                "View Employees By Department",
                "View Employees By Manager",
                "View Department Budget",
                "Add Department",
                "Add Role",
                "Add Employee",
                "Update Employee Role",
                "Delete Department",
                "Delete Role",
                "Delete Employee",
                "Exit"
            ]
        }
    ]);
}

async function init() {
    let exitProgram = false;
    while (!exitProgram) {
        let {program} = await mainMenu();
        switch (program) {
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