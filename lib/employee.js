class Employee {
    constructor(name,id,email,title){
    this.name = name;
    this.id = id;
    this.title = title;
    this.email = email;

    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getRole(){
        return this.title;
    }
    getEmail(){
        return this.email;
    }
    createCard(data){
       return `<div class="card">
        <p>Name: ${data.name}</p>
        <p>Email: ${data.email}</p>
        ${data.officenumber ? data.officenumber : ""}
        ${data.github ? data.github : ""}
        ${data.school ? data.school : ""}
    </div>`
    }
    getTemplate(data,cards){
        return `<html>
        
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
                <p>${data.title}</p>
            </div>
            </header>
        ${cards}
           
        </body>
        
        </html>`
        }
}

module.exports = Employee