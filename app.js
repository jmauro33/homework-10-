
var manager = require ("./lib/manager")
var employee = require ("./lib/employee")
var engineer = require ("./lib/engineer")
var intern = require ("./lib/intern")

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



  ])
  .then(answers => {
   if(answers.role==="employee"){
     var newEmployee = new employee(answers.name,answers.id,answers.email,answers.role)
     newEmployee.getGithub()
     console.log(newEmployee.getRole())
   }
  });





