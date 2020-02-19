const Employee = require ("./employee")
class Engineer extends Employee {
    constructor(name,id,title,email,github){
    super(name,id,title,email);
    this.github = github;
  
  }
  getRole(){
      console.log("Engineer");
  }
  getGithub(){
      console.log(this.github);
  }
}

module.exports = Engineer