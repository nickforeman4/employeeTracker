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
        displayTracker()
    }
});

function displayTracker() {
    inquirer.prompt([
        {
            type: "list",
            message: "Choose an option:",
            name: "userInput",
            choices: [
                "Add Department",
                "Add Role",
                "Add Employee",
                "View Departments",
                "View Roles",
                "View Employees",
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
            case "View Departments":
                viewDepartments();
                break;
            case "View Roles":
                viewRoles();
                break;
            case "View Employees":
                viewEmployees();
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
    inquirer.prompt([{
        type: "input",
        message: "Enter Department",
        name: "departmentName",
    }]).then(function (response) {
        connection.query("INSERT INTO department (name) values (?);", response.departmentName, function (error, result) {
            if (error) throw error
            console.log("departmentAdded")
            displayTracker()
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
                1, 2, 3, 4, 5, 6
            ]
        }
    ]).then(function (response) {
        connection.query("INSERT INTO role (title, salary, department_id) values (?, ?, ?);", [response.title, response.salary, response.department_id], function (error, result) {
            if (error) throw error
            console.log("roleAdded")
            displayTracker()
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
                1, 1.1, 2, 2.1, 3, 3.1, 4, 4.1, 5, 5.1, 6, 6.1
            ]
        },
        {
            type: "list",
            message: "Enter Manager ID",
            name: "manager_id",
            choices: [
                1, 2, 3, 4, 5, 6
            ]
        }
    ]).then(function (response) {
        connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) values (?, ?, ?, ?);", [response.first_name, response.last_name, response.role_id, response.manager_id], function (error, result) {
            if (error) throw error
            console.log("employeeAdded")
            displayTracker()
        })
    })
};

function viewDepartments() {
    connection.query("SELECT * FROM department;", function (error, result) {
        if (error) throw error
        console.table(result)
        displayTracker()
    })
};

function viewRoles() {
    connection.query("SELECT * FROM role;", function (error, result) {
        if (error) throw error
        console.table(result)
        displayTracker()
    })
};

function viewEmployees() {
    connection.query("SELECT * FROM employee;", function (error, result) {
        if (error) throw error
        console.table(result)
        displayTracker()
    })
};

function updateEmployeeRole() {
    connection.query("SELECT * FROM employee", function (err, results) {
        if (err) throw err;
        inquirer.prompt([
            {
                name: "choice",
                type: "rawlist",
                choices: function () {
                    var employeeArray = [];
                    for (var i = 0; i < results.length; i++) {
                        employeeArray.push(results[i].first_name + " " + results[i].last_name);
                    }
                    return employeeArray;
                },
                message: "Which employee role would you like to update?",
            },
            {
                name: "roleUpdate",
                type: "input",
                message: 'What is the new Role ID?',
                choices: [
                    1, 1.1, 2, 2.1, 3, 3.1, 4, 4.1, 5, 5.1, 6, 6.1
                ]
            },
        ])
            .then(function (response) {
                //get the information of the chosen item
                var chosenItem;
                for (var i = 0; i < results.length; i++) {
                    if ((results[i].first_name, results[i].last_name) === response.choice) {
                        chosenItem = results[i];
                    }
                }
                connection.query(
                    "UPDATE employee SET ? WHERE ?", function (error) {
                        if (error) throw err;
                        console.log("Employee role has been updated successfully.");
                        displayTracker();
                    }
                );
            });
    });
};