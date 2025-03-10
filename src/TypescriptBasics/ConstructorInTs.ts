class Students {
    //Constructor : constructor is a special method in a class which is used 
    //  initialize variables and to create an object of a class.
    // Types of constructor : 1. Default constructor - when we don't define any constructor in a class, then default constructor is called.
    // 2. User defined constructor - when we define a constructor in a class, then user defined constructor is called.
    // -> 1. Non-parameterized constructor - constructor without any parameter.
    // constructor() {
    //     console.log("Constructor is called");
    // }
    // -> 2. Parameterized constructor, parameterized constructor

    // student!: string;
    // constructor(name: string) {
    //     this.student = name;        // Name = John -> student = John
    // }
    
    // sayHello(student: string) {     // student = Ravi
    //     console.log(this.student);       // Ravi
    // }

    student: string;    //Ravi
    age: number;    //12
    grade: string; //A

    constructor(student: string, age: number, grade: string) {  //student = Ravi, age = 12, grade = A
        this.student = student;                                 //this.student = Ravi
        this.age = age;
        this.grade = grade;
    }

    printDetails() {
        //My name is Ravi, I am 12 years old and I got grade A

        // console.log("Student details are : " + this.student + ", " + this.age + ", " + this.grade);    
        console.log(this.student.length)
        console.log(`My name is ${this.student}, I am ${this.age} years old and I got grade ${this.grade}`)     }


}

let objectVar : Students = new Students("Ravi", 12, "A");
objectVar.printDetails(); 