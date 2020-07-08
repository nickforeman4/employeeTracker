const inquirer = require("inquirer");
const mysql = require("mysql");

require("console.table");
const connection = mysql.createConnection({
    host: "localHost",
    port: 3306,
    user: "root",
    password: "Whiting3543",
    database: "employeeTracker"
});

connection.connect(function (error) {
    if (error) {
        console.log("Error connecting to database.", error)
    } else {
        displayTable()
    }
});

function displayTable() {
    inquirer.prompt([
        {
            type: "list",
            message: "Choose an option.",
            name: "userInput",
            choices: [
                "Add Department",
                "Add Role",
                "Add Employee",
                "Display Department",
                "Display Role",
                "Display Employee",
                "Update Employee Role",
                "Exit Application"
            ],
        }
    ]).then(function (response) {
        switch (response.userInput) {
            case "Add Department":
                addDepartment();
                break;
            case "Add Role":
                addRole();
                break;
            case "Add Employee":
                addEmployee();
                break;
            case "Display Department":
                displayDepartment();
                break;
            case "Display Role":
                displayRole();
                break;
            case "Display Employee":
                displayEmployee();
                break;
            case "Update Employee Role":
                updateEmployeeRole();
                break;
            default: connection.end();
            process.exit(0);
        }
    })
};

function addDepartment() {
    inquirer.prompt([ {
        type: "input",
        message: "Enter Department ID",
        name: "departmentName",
    }]) .then(function(response) {
        connection.query("INSERT INTO department (name) values (?);", response.departmentName, function(error, result) {
            if (error) throw error
            console.log("departmentAdded")
            displayTable()
        })
    })
};

function addRole() {
    inquirer.prompt([ 
        {   
            type: "input",
            message: "Enter Title",
            name: "title",
        },
        {
            type: "input",
            message: "Enter Salary",
            name: "salary",
        },
        {
            type: "list",
            message: "Enter Department ID",
            name: "department_id",
            choices: [
                1, 2
            ]
        }
]) .then(function(response) {
        connection.query("INSERT INTO role (title, salary, department_id) values (?, ?, ?);", [response.title, response.salary, response.department_id], function(error, result) {
            if (error) throw error
            console.log("roleAdded")
            displayTable()
        })
    })
};

function addEmployee() {
    inquirer.prompt([ 
        {
            type: "input",
            message: "Enter First Name",
            name: "first_name",
        },
        {
            type: "input",
            message: "Enter Last Name",
            name: "last_name",
        },
        {
            type: "list",
            message: "Enter Role ID",
            name: "role_id",
            choices: [
                3, 4
            ]
        },
        {
            type: "list",
            message: "Enter Manager ID",
            name: "manager_id",
            choices: [
                1, 2
            ]
        }
]) .then(function(response) {
        connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) values (?, ?, ?, ?);", [response.first_name, response.last_name, response.role_id, response.manager_id], function(error, result) {
            if (error) throw error
            console.log("employeeAdded")
            displayTable()
        })
    })
};

function displayDepartment() {
    connection.query("SELECT * FROM department;", function(error, result) {
        if (error) throw error
        console.table(result)
        displayTable()
    })
};

function displayRole() {
    connection.query("SELECT * FROM role;", function(error, result) {
        if (error) throw error
        console.table(result)
        displayTable()
    })
};

function displayEmployee() {
    connection.query("SELECT * FROM employee;", function(error, result) {
        if (error) throw error
        console.table(result)
        displayTable()
    })
};