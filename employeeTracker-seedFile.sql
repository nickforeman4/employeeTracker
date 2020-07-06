USE employeeTracker;

INSERT INTO department (name) values ("Marketing ID");

INSERT INTO department (name) values ("Publishing ID");

SELECT * FROM department;

INSERT INTO role (title, salary, department_id) values ("Marketing Manager", 100000, 1);

INSERT INTO role (title, salary, department_id) values ("Publishing Manager", 75000, 2);

INSERT INTO role (title, salary, department_id) values ("Marketing Administrator", 50000, 1);

INSERT INTO role (title, salary, department_id) values ("Publishing Administrator", 50000, 2);

SELECT * FROM role;

INSERT INTO employee (first_name, last_name, role_id, manager_id) values ("Nicholas", "Foreman", 1, NULL);

INSERT INTO employee (first_name, last_name, role_id, manager_id) values ("Justin", "Foreman", 2, NULL);

INSERT INTO employee (first_name, last_name, role_id, manager_id) values ("Marcella", "Foreman", 3, NULL);

INSERT INTO employee (first_name, last_name, role_id, manager_id) values ("Willie", "Foreman", 4, NULL);

SELECT * FROM employee;