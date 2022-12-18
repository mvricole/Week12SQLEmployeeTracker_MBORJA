use employees;

INSERT INTO department
    (name)
VALUES
    ('Grants'),
    ('Victim Assistance'),
    ('Program Management'),
    ('Executive Team');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Victim Advocate', 100000, 2),
    ('Grant Writer', 80000, 1),
    ('Program Director', 150000, 3),
    ('Restitution Program Director', 150000, 3),
    ('Chief Program Officer', 160000, 4),
    ('Grant Manager', 125000, 1),
    ('Chief Executive Officer', 250000, 4),
    ('Chief Financial Officer', 190000, 4);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Jana', 'Gomez', 1, NULL),
    ('Marissa', 'Deleon', 2, 1),
    ('Kristin', 'Chapman', 3, NULL),
    ('Ashley', 'Sur', 4, 3),
    ('Reina', 'Montemayor', 5, NULL),
    ('Kathleen', 'Leverson', 6, 5),
    ('Kate', 'Kilcoyne', 7, NULL),
    ('Lisa', 'Hayes', 8, 7);
