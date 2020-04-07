
var manager = require ("./lib/manager")
var engineer = require ("./lib/engineer")
var intern = require ("./lib/intern")
var fs = require("fs")
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
      answers.officenumber = response.officenumber
      return answers
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
       answers.github = response.github
      return answers
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
      answers.school = response.school
      return answers
    })
    }
  })
  .then(answers => {
  if (answers.role === "manager"){
    console.log(answers)
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
  var managers = employeesarray.filter(employee => employee.title === "manager");
  var engineers = employeesarray.filter(employee => employee.title === "engineer");
  var interns = employeesarray.filter(employee => employee.title === "intern");
  console.log(managers);
  console.log(engineers);
  console.log(interns);
  var cards = ""
  for (var i = 0; i < managers.length; i++ ){
    var currentManager = managers[i];
    cards += currentManager.createCard(currentManager)
    var managerHTML = managers [i].getTemplate(currentManager,cards);
    console.log(managerHTML);
    fs.writeFileSync("./output/manager.html",managerHTML);
  }
  for (var i = 0; i < engineers.length; i++ ){
    var currentEngineer = engineers[i];
    cards += currentEngineer.createCard(currentEngineer,cards)
    var engineerHTML = engineers [i].getTemplate(currentEngineer);
    console.log(engineerHTML);
    fs.writeFileSync("./output/engineer.html",engineerHTML);
  }
  for (var i = 0; i < interns.length; i++ ){
    var currentIntern = interns[i];
    cards += currentIntern.createCard(currentIntern,cards)
    var internHTML = interns [i].getTemplate(currentIntern);
    console.log(internHTML);
    fs.writeFileSync("./output/intern.html",internHTML);
  }
  var newEmployee = new employee();
  var teamHTML = newEmployee.getTemplate({title:"team"},cards);
  fs.writeFileSync("./output/team.html",teamHTML);
}



