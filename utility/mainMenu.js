const inquirer = require("inquirer");
const { table } = require("table");

const config = {
    border: {
        topBody: `─`,
        topJoin: `┬`,
        topLeft: `┌`,
        topRight: `┐`,

        bottomBody: `─`,
        bottomJoin: `┴`,
        bottomLeft: `└`,
        bottomRight: `┘`,

        bodyLeft: `│`,
        bodyRight: `│`,
        bodyJoin: `│`,

        joinBody: `─`,
        joinLeft: `├`,
        joinRight: `┤`,
        joinJoin: `┼`
    }
};

// async function mainMenu(data) {
//     let menuData = [];
//     menuData = [ Object.keys(data), ...data.map(val => Object.values(val)) ];
//     await inquirer.prompt([ 
//         { message: "\n" + table(tableData, config), type: "input", name: "name" }
//     ]);
// }

async function mainMenu() {
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



