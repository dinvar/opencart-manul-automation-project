// //How to find duplicate elements in an array

// let names: string[] = ["John", "Jane", "John", "Doe", "Jane"];

// for (let i = 0; i < names.length; i++) {  //0 = john
    
//     for (let j = i + 1; j < names.length; j++) {    //j = 2; <5 true
//         if(names[i]==names[j]) {    //John==Jane -> false
//             console.log("Found duplicate element is " + names[i]);
//         }
//     }
// }

var names: string[] = ["Ab", "Ab", "Cd", "Cd", "Xy"];

for (let i=0; i<names.length; i++) {
  for (let j=i+1; j<names.length; j++) {
    if(names[i] == names[j]) {
      console.log("Duplicate "+ names[i]);
    }
  }
}

const names1: string[] = ["Ab", "Ab", "Cd", "Cd", "Xy"];

const uniqueNames: string[] = [];

for (let i = 0; i < names.length; i++) {
  if (!uniqueNames.includes(names[i])) {
    uniqueNames.push(names[i]);
  }
}

console.log("Array after removing duplicates:", uniqueNames);
