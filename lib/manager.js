const Employee = require ("./employee")
class Manager extends Employee {
    constructor(name,id,email,title,officeNumber){
    super(name,id,email,title);
    this.officeNumber = officeNumber;
  }

  getRole(){
      return this.title;
  }
  getOfficeNumber(){
      return this.officeNumber;
  }

}
module.exports = Manager