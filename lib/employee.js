class Employee {
    constructor(name,id,title,email){
    this.name = name;
    this.id = id;
    this.title = title;
    this.email = email;

    }
    getName(){
        console.log(this.name);
    }
    getID(){
        console.log(this.id);
    }
    getRole(){
        console.log(this.title);
    }
    getEmail(){
        console.log(this.email);
    }
}

module.exports = Employee