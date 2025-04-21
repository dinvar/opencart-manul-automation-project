//Loop statements in TypeScript
//types of loops in TypeScript
//for loop
//Syntax

    //for(initialization; condition; increment/decrement){
//    //code to be executed
//}
// for (let i = 1; i<=5; i++) {
//     console.log(i);
// }

// for (let i =1; i<=20; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// for(let i=5; i>=1; i--) {
//     console.log(i);
// }

// let sum = 0;
// for (let i = 1; i<=5; i++) {
//     sum = sum + i;
// }
//console.log(sum);
//Example
//Print Ravi - five times
// for (let i = 5; i >= 0; i--) {   //Initalization i=5, 
//                                 // condition -> 4>=5 - true 
//                                 //Execute code, 5, 4, 3, 2, 1
//     console.log(i);
//                                 //Decrease value of i by 1
//                                 //i=4
// }

// for (let i = 5; i >= 0; i--) {
//     console.log(i);
//   }
// for (let i = 0; i>=10; i++) {
//     console.log(i);
// }  

// Question: What will be the output of the following program?

// Puzzle: What will be the output of the following program?
// let sum = 0;                       //sum = 15
// for (let i = 1; i <= 5; i++) {      //Initalization i=5,
//     sum = sum + i;                 //condition ->5<=5 - true
// }                                  //Execute code, sum = 10+5 = 15
// console.log(sum);                   //Increase value of i by 1

//while loop
//Syntax
//while(condition){
//    //code to be executed
//}
//Initialize a variable
// while (condition) {
//     console.log("Hello");
    //increment/decrement
// }
// let i= 1;
// while (i <=5) {
//     console.log(i);
//     i++
// }
// let i = 0;
// while (i < 5) {             // 5<5 - false
//     console.log("Hello");
//     i++;                    //i=5
//}
//For each loop
//Syntax
// for (let variable of array) {
//     //code to be executed
// }


// let names = ["Ravi", "John", "Tom", "Jerry"];   //intialize 

// for (let i = names.length-1 ; i >= 0; i--) {  
//    const name = names[i];
//    if (name === "Tom") {
//        continue;
//    }
//     console.log(name);

// }



//  for (let i = 0; i < names.length; i++) {  
//     console.log(names[i]);     
// }

// for (let name of names) {
//     console.log(name);
// }

for (let i =1; i<=20; i+=2) 
     {
        console.log(i);
    }

for (let i =1; i<=20; i++) {
    if(i % 2 ===0) 
        console.log(i)
    }