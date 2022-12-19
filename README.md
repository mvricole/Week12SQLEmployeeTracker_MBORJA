# Week12SQLEmployeeTracker_MBORJA

Employee Tracking System using MySQL 

## Introduction
This is an example of a content management system (CMS) interface that is created using mySQL, Node.js and Inquirer. It is meant to be user friendly
for non developer clientele. 

In this application, the user can access databases, add employees, remove employees, edit employee information, and view them after making edits. 
It allows the user to manage a company's employee database. 


## User Story

```
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```


## Acceptance Criteria

Here are the critical requirements necessary to develop a portfolio that satisfies a typical business' needs:

```
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database
```

## Before You Start - Downloading Important Packages

Prior to loading the application, please make sure you have all your dependencies installed. This is prompted in your command line using `npm install` or `npm i`


If you were to make this from scratch, you will also need to install dotEnv and add it to your depencies. 

This can be done by running `npm i dotenv`

From there, make sure to plug in your mySQL username and password in a private .env file. 

Once that is complete, the databases need to be created. 

Using information from the repository, please make your database by running the commands in the schema file in your mySQL shell of choice. 

Following the schema, please seed your employee data using the seed file provided. 

Lastly, start the application by running `node index.js` in your terminal. 

## Development Hurdles and Challenges

When creating the interface, I struggled a bit with connecting between the different tables. I also encountered some hiccups along the way in making sure my private mySQL
information was protected using dotEnv. 

## Sample Images

![image](https://user-images.githubusercontent.com/108310424/208326285-7ba18cc9-d7e9-4200-b89c-5fb1e61979fe.png)

![image](https://user-images.githubusercontent.com/108310424/208326295-3158adfd-70ce-49f7-8519-a2a7add71944.png)


## Sample Demo

[Untitled_ Dec 18, 2022 3_39 PM.webm](https://user-images.githubusercontent.com/108310424/208325906-a663fe0d-1aa1-46d0-b4c1-60a4dfc94ba8.webm)
