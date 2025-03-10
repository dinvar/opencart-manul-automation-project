//Decision Making Statements in Typescript
// if statement

//How to compare two numbers or strings in Typescript
// using == or ===
// console.log(5 == 5); // true


let num: number = 5;
if (num == 5) {
    console.log("Number is same");
}

// if-else statement
let age: number = 18;
if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are a minor");
}

// if-else if-else statement
let score: number = 85;
if (score >= 90) {
    console.log("Grade A");
} else if (score >= 75) {
    console.log("Grade B");
} else if (score >= 50) {
    console.log("Grade C");
} else {
    console.log("Grade F");
}

// switch statement
// switch(data) {
//     case value1: 
//         // code block
//         break;
//     case value2:
//         // code block    
//         break;
//     default:
//         // code block
// }
let day: String = "f";
switch (day) {
    case "mONDAY":
        console.log(1);
        break;
    case "Tuesday":
        console.log(2);
        break;
    case "Wednesday":
        console.log(3);
        break;
    case "Thursday":
        console.log(4);
        break;
    case "Friday":
        console.log(5);
        break;
    case "Saturday":
        console.log(6);
        break;
    case "Sunday":
        console.log(7);
        break;
    default:
        console.log("Invalid day");
}