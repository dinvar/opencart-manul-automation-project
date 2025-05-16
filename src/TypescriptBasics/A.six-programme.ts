//1st = Factorial number
function factorialNumber(n: number): number {
    let result = 1;
    for(let i=1; i<=n; i++) {
        result = result * i;
    }
    return result
}
console.log(factorialNumber(5));

//2nd= Fibonacci Series
function printFibonacci(n: number): void {
    let a = 0, b = 1;
  
    for (let i = 0; i < n; i++) {
      console.log(a);
      const next = a + b;
      a = b;
      b = next;
    }
  }
  printFibonacci(10);

//3rd= reverse string wd array & for loop
function reverseStr(str: string) {
    let reversed = '';
    for(let i= str.length -1; i>=0; i--) {
        reversed += str[i]
    }
    return reversed;
}
console.log(reverseStr("Hi"));

//4th=even odd numbers
function separateEvenOdd(n: number): void {
    const evenNumbers: number[] = [];
    const oddNumbers: number[] = [];
      for (let i = 1; i <= n; i++) {
      if (i % 2 === 0) {
        evenNumbers.push(i);
      } else {
        oddNumbers.push(i);
      }
    }
    console.log("Even Numbers:", evenNumbers);
    console.log("Odd Numbers:", oddNumbers);
  }
  separateEvenOdd(10);
  
//5= reverse Integer (with function)
var no: number = 5678;
function reversedNo(no:number):number{
var reversedNo = 0;

while( no != 0){
    let remainder = no % 10;
    reversedNo = reversedNo * 10 + remainder;
    no = Math.floor(no/10)
}
    return reversedNo;
 }
 console.log(reversedNo(no));

//5 reverse Integer (without function)
var no: number = 1234;
var reversed = 0;

 while (no != 0) {
  let remainder = no % 10;
  reversed = reversed * 10 + remainder;
  no = Math.floor( no/10 );
 }
 console.log(reversed);
  
 