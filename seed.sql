USE employeeTracker;

INSERT INTO department (name) values ("Accounting");

INSERT INTO department (name) values ("Human Resources");

INSERT INTO department (name) values ("Marketing");

INSERT INTO department (name) values ("Production");

INSERT INTO department (name) values ("Purchasing");

INSERT INTO department (name) values ("Research & Development");

SELECT * FROM department;

INSERT INTO role (title, salary, department_id) values ("Accounting Manager", 150000, 1);

INSERT INTO role (title, salary, department_id) values ("Human Resources Manager", 125000, 2);

INSERT INTO role (title, salary, department_id) values ("Marketing Manager", 150000, 3);

INSERT INTO role (title, salary, department_id) values ("Production Manager", 125000, 4);

INSERT INTO role (title, salary, department_id) values ("Purchasing Manager", 150000, 5);

INSERT INTO role (title, salary, department_id) values ("Research & Development Manager", 150000, 6);

SELECT * FROM role;

INSERT INTO employee (first_name, last_name, role_id, manager_id) values ("Nicholas", "Foreman", 1, NULL);

INSERT INTO employee (first_name, last_name, role_id, manager_id) values ("Justin", "Foreman", 2, NULL);

INSERT INTO employee (first_name, last_name, role_id, manager_id) values ("Dannin", "Harris", 3, NULL);

INSERT INTO employee (first_name, last_name, role_id, manager_id) values ("Cedric", "Hall", 4, NULL);

INSERT INTO employee (first_name, last_name, role_id, manager_id) values ("Lance", "Storrs", 5, NULL);

INSERT INTO employee (first_name, last_name, role_id, manager_id) values ("Korrin", "Jackson", 6, NULL);

SELECT * FROM employee;