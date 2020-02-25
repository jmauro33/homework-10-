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
var HTML = `<html>

<head>
    <style>
              .header{
            width: 100%;
            background-color: red;
            height: 50px;
            margin-bottom: 50px;
            text-align: center;
        }

        .card{
            
            border: royalblue;
            border-style: dotted;
            background-color: silver;
            text-align: center;
            width: 250px;
            margin-left: 550px;
            margin-right: 550px;
            height: 250px;
            
        }


    </style>
</head>

<body>
    <header>
    <div class="header">
        <p>Employee Name</div>
    </div>
    </header>

    <div class="card">

        <p>PlaceHolder</p>










    </div>
</body>

</html>`
module.exports = Intern