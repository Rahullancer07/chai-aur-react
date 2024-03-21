const user =  {
    name : "Rahul Yadav",
    age : 23,
    getBirthYear : function(){
        return new Date().getFullYear() - this.age;
    }
}

const user1 = {
    name : "Rohan Yadav",
    age : 28,
}

user1.__proto__ = user ; // it will add all the meathods of user into prototype of user1, which we can use 

// We can also do this thing by apply , call and bind
const birthYear = user.getBirthYear.apply(user1);
// console.log(birthYear);


// Construct a class and will use Inheritance functionality

class Person {
    constructor(){
        this.species = "Homo Sapien"
    }

    eat(){
        console.log("Eat");
    }
    sleep(){
        console.log("Sleep");
    }
    work(){
        console.log("Do Nothing");
    }
}

// class engineer which will have all the meathods and properties of a person
class Engineer extends Person{
    work(){
        console.log("Build something , Solve Real world Problems"); // as parent and child both have same meathod, child meathod will invoke
    }
}


const p1 = new Person();
const e1 = new Engineer();



// Q1) You are creating a website for your college.Create a class User with 2 properties , name & email.
//      It also has a meathod called ViewData() that allows user to view website data.

let DATA = "secret info";
class User {
    constructor(name , email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log("View data of the website", DATA);
    }
}

// Q2) Create a admin class which will inherit the user class. Add a editData meathod which can edit the data

class Admin extends User{
    constructor(name , email){
        super(name , email); // will be able to access the constructor of the parent class
    }
    editData(){
        DATA = "New secret info";
        console.log("View data of the website", DATA);
    }
}


const student1 = new User("Rahul", "rahul@gmail.com");
const admin = new Admin("admin", "admin@gmail.com");