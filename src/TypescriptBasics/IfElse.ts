//Decision Making Statements in Typescript
// if statement

//How to compare two numbers or strings in Typescript
// using == or ===
// console.log(5 == 5); // true


// let num: number = 5;
// if (num == 5) {
//     console.log("Number is same");
// }

let num: number = 50;
if (num>60) {
    console.log("Number is greater than 50");

}

//if-else statement
let age: number = 15;
if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are a minor");
}

let age1: number = 21;
if (age1 >= 18) {
    console.log("You are an adult");
}   else {
    console.log("You are a minor");     
}

let number: number = 10;

if (number > 0) {
    console.log("The number is positive");
} else if (number < 0) {
    console.log("The number is negative");
} else {
    console.log("The number is zero");
}

// Real-world scenario:
// Condition: Check if the user is authenticated.
// Decision: If true, give access; if false, prompt for login.
let authenticiation: boolean = false;
if (authenticiation) {
    console.log("Access Grantes");
} else {
    console.log("Access Denied");
}



// // if-else if-else statement
// let score: number = 85;
// if (score >= 90) {
//     console.log("Grade A");
// } else if (score >= 75) {
//     console.log("Grade B");
// } else if (score >= 50) {
//     console.log("Grade C");
// } else {
//     console.log("Grade F");
// }

//multiple user login
function validLogin(username: string, password: string): void {
   const valid_username= "admin";
   const valid_password = "admin@123";

if(username === valid_username && password == valid_password) {
    console.log("Valid user");
}else {
    console.log("Invalid User")
}
}
validLogin("admin", "admin@123");
validLogin("admin", "admin@321");
