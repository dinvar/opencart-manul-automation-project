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
  
//6 larest & smallest nmber
function FindMaxMin(nums: number[]) {
	let largest = nums[0];
	let smallest = nums[0];

	for (let n of nums) {
	if (n > largest) largest = n;
	if(n < smallest) smallest = n;
}
 	console.log("Largest:", largest);
	console.log("Smallest:", smallest);
}
FindMaxMin([12,45,98,76,34,3]); 

//string count 7
//way 1
var str: string = "Typescript"
console.log(str.length);

//way 2
function StringCount(str: string) {
  return str.length
}
console.log(StringCount("playwright"));

// prime number
function isPrime(n: number): boolean {
  if (n <= 1) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log(isPrime(5));
