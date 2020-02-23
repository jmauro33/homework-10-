const Employee = require ("./employee")
class Manager extends Employee {
    constructor(name,id,title,email,officenumber){
    super(name,id,title,email);
    this.officenumber = officenumber;
  }

  getRole(){
      console.log("Manager");
  }
  getOfficenumber(){
      console.log(this.officenumber);
  }
}

module.exports = Manager