let a = 10;

// For primitive data types , arguments are passed by value (copy is been created , it wont effect the original)
function changeValue(num) {
    num = 20;
    console.log(`Value has been updated to : ${num}`);
}

changeValue(a);
console.log(a);

let student = {
    name: "Rahul",
    age: 22
}


// For non-primitive data types , arguments are passed by reference 
function updateAge(student) {
    student.age = 23
    console.log("Student age has been updated")
}

updateAge(student);
console.log(student.age);

// ---------------------------------------------------------------

// MAP and FILTER (Both are meathods of array in javascript)

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// Map will return a new array by transforming the elements of the array
const newArr = arr.map((item) => item * 2);
console.log(newArr);
console.log(arr);

// Filter
const filteredArr = arr.filter((item) => item % 2 == 0);
console.log(filteredArr);
console.log(arr);

// ---------------------------------------------------------------

// Pure and Impure function

// Pure function - It will have the same output for the same provided input
function greeting(name) {
    return `Hello ${name}`;
}
console.log(greeting("Rahul Yadav"));

// Impure function - It will have a different out for the same provided input
let random = Math.floor(Math.random() * 10);
function greeting1(name) {
    return `Hello ${name} , your seat is ${random}`;
}
console.log(greeting1("Rahul Yadav"));


// -----------------------------------------------------

// For-in and For-of

const car = {
    brand : "Tata",
    name : "Harrier",
    model : "XZ",
    type : "Manual"
}

for(key in car){
    console.log(key);
}

// it will throw error while accessing values of an object
// for(value of car){
//     console.log(value); 
// }

const carBrands = ["Tata", "BMW", "Audi" , "Mercedes"];
for(brand of carBrands){
    console.log(brand);
}

// -----------------------------------------------------------

// Call , Apply , Bind

// CALL -------------------------------
// Borrowing a function from the object and can be used for another object without actually adding to it.
let cap = {
    name: "Steve",
    team: "cap",
    petersTeam: function(mem1, mem2){
        console.log(`Hey ${this.name} am your neighborhood spiderman and I belong to ${this.team}'s team`);
        console.log(`I am working with ${mem1} & ${mem2} `);
    }
}
let ironMan = {
    name: "Tony", 
    team: "iron man"
}
// here parameters are passed by comma
cap.petersTeam.call(ironMan, "natasha", "war machine");

// APPLY ------------------------------

// Apply is used to borrow function for n number of parameters.
// The only difference between call and apply is that we will pass parameters in the form of an array in apply.
// When we are not aware of a number of parameters then we use apply.

cap.petersTeam.apply(ironMan, ["natasha", "war machine", "doctor strange", "loki"])

// BIND ------------------------------

// Copies the function that you call later with the same this.
// When we want to use the method multiple times.

let ironManStolenMan =  cap.petersTeam.bind(ironMan);
ironManStolenMan("natasha", "war machine", "doctor strange")
ironManStolenMan("natasha", "war machine")


