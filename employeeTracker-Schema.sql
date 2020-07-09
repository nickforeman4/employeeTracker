DROP DATABASE IF EXISTS employeeTracker;

CREATE DATABASE employeeTracker;

USE employeeTracker;

CREATE TABLE department (
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR (30));

CREATE TABLE role (
	id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR (30),
    salary DECIMAL,
    department_id INT, 
    FOREIGN KEY (department_id) REFERENCES department(id));

CREATE TABLE employee (
	id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR (30),
    last_name VARCHAR (30),
    role_id INT (2),
    manager_id INT, FOREIGN KEY (role_id) REFERENCES role(id));