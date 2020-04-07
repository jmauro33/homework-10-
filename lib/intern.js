const Employee = require("./employee")
class Intern extends Employee {
    constructor(name, id, title, email, school) {
        super(name, id, title, email);
        this.school = school;
        this.role = "Intern";
    }
    
    getRole() {
        return this.role
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern