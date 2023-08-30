    INSERT INTO department (id, name)
    VALUES
     (1, 'Sales'), 
     (2, 'Engineering'), 
     (3, 'Finance'), 
     (4, 'Legal');

    INSERT INTO role (id, title, salary, department_id)
    VALUES (1, 'Sales Lead', 100000.00, 1),
           (2, 'Salesperson', 80000.00, 1),
           (3, 'Lead Engineer', 150000.00, 2),
           (4, 'Software Engineer', 120000.00, 2),
           (5, 'Accountant', 125000.00, 3),
           (6, 'Legal Team Lead', 250000.00, 4),
           (7, 'Lawyer', 190000.00, 4);
           
    INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
    VALUES (1, 'John', 'Doe', 1, NULL),
           (2, 'Jacke', 'Chan', 2, 1),
           (3, 'Alex', 'Rodriguez', 3, NULL),
           (4, 'Kevin', 'Yuknick', 4, 3),
           (5, 'Zesty', 'Brown', 5, NULL),
           (6, 'Sarah', 'Parker', 6, NULL),
           (7, 'Tony', 'Allen', 7, 6);