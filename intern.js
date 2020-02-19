const Employee = require ("./employee")
class Intern extends Employee {
    constructor(name,id,title,email,school){
    super(name,id,title,email);
    this.school = school;
  
  }
  getRole(){
      console.log("Intern");
  }
  getSchool(){
      console.log(this.school);
  }
}

module.exports = Intern