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
module.exports = Manager