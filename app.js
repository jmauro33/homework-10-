
var manager = require ("./lib/manager")
var employee = require ("./lib/employee")
var engineer = require ("./lib/engineer")
var intern = require ("./lib/intern")
var employeesarray = []

var inquirer = require('inquirer');
inquirer
  .prompt([ {
    name: "name",
    type:"input",
    message:"what is your name?"
  },
  
  {
    name: "id",
    type:"input",
    message:"what is your id?"
  },
  {
    name: "role",
    type:"input",
    message:"what is your role?"
  },
  {
    name: "email",
    type:"input",
    message:"what is your email?"
  },
  {
    name: "officenumber",
    type: "input",
    message:"what is your office number?"
  },
  {
    name: "github",
    type:"input",
    message:"what is your github?"
  },
  {
    name: "school",
    type:"input",
    message:"where did you go to school?"
  }

  ])
  .then(answers => {
   var newManager = new manager(answers.name,1,answers.email,"manager",answers.officenumber)
  employeesarray.push(newManager);
  return answers;
  })
  .then(answers => {
    var newEngineer = new engineer(answers.name,2,answers.email,"engineer",answers.github)
   employeesarray.push(newEngineer);
   return answers;
   })
   .then(answers => {
    var newIntern = new intern(answers.name,3,answers.email,"intern",answers.school)
   employeesarray.push(newIntern);
   return answers;
   })

  .then(answers => {
   if(answers.role==="employee"){
     var newEmployee = new employee(answers.name,answers.id,answers.email,answers.role)
     newEmployee.get()
     console.log(newEmployee.getRole())
   }
   console.log(employeesarray)
  });





