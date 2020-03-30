
var manager = require ("./lib/manager")
var engineer = require ("./lib/engineer")
var intern = require ("./lib/intern")
var employeesarray = []

var inquirer = require('inquirer');
inquirer
  .prompt([ {
    name: "name",
    type:"input",
    message:"what is your name?"
  },{
    name: "id",
    type:"input",
    message:"what is your id?"
  },{
    name: "email",
    type:"input",
    message:"what is your email?"
  },{
    name: "role",
    type:"list",
    message:"what is your role?",
    choices: [
      "manager","engineer","intern","employee"
    ]

  }])
  .then(function(answers){
    if (answers.role === "manager"){
     return inquirer.prompt(
        {
          name: "officenumber",
          type: "input",
          message:"what is your office number?"
        },
      )
    .then(function(response){
      return {role: answers.role,officenumber:response.officenumber}
    })
    } 
    if (answers.role === "engineer"){
     return inquirer.prompt(
      {
        name: "github",
        type:"input",
        message:"what is your github?"
      },
     )
     .then(function(response){
      return {role: answers.role,github:response.github}
    })
    }
    if (answers.role === "intern"){
     return inquirer.prompt(
      {
        name: "school",
        type:"input",
        message:"where did you go to school?"
      },
     )
     .then(function(response){
      return {role: answers.role,school:response.school}
    })
    }
  })
  .then(answers => {
  if (answers.role === "manager"){
    var newManager = new manager(answers.name,1,answers.email,"manager",answers.officenumber)
  employeesarray.push(newManager);
  } 
  if (answers.role === "engineer"){
        var newEngineer = new engineer(answers.name,2,answers.email,"engineer",answers.github)
   employeesarray.push(newEngineer);
  }
  if (answers.role === "intern"){
      var newIntern = new intern(answers.name,3,answers.email,"intern",answers.school)
   employeesarray.push(newIntern);
  }
   if(answers.role==="employee"){
     var newEmployee = new employee(answers.name,answers.id,answers.email,answers.role)
     newEmployee.get()
     console.log(newEmployee.getRole())
   }
  // console.log(employeesarray)
  generateHTML();
  });

function generateHTML(){
  var manager = employeesarray.filter(employee => employee.title === "manager");
  console.log(manager);
}



