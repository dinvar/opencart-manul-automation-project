//example1 of Singel-Level Inheritance
class PersonA                        //create variable
{
    name: string;

    constructor(name: string) {   //c is function.it will run when object of class is created.
        this.name = name;       //class property = constructor parameter
    }                   //value of con. parameter empno(local variable)is assigned to the instance property empno (which is part of the object).
                        //This allows the object to "store" the value passed during object creation.
}

class Employee extends PersonA {        //create child class
    empno: number;

    constructor(empno: number, name: string) //need 2 arguments 1of existing class,1of this class
    {
        super(name);                  //this parameter calls parent class
        this.empno = empno;          //class property = constructor parameter
    }
    displayData(): void{        //this method callled to display employees data
        console.log(this.empno);
        console.log(this.name);
    }
}

var emp= new Employee(101, "Rohan");    //create object to call class
emp.displayData();                      //display method

//example2
class PersonB {
    name: string;

constructor(name: string) {
    this.name = name;
    }
} 

class Student extends PersonB {
    IDNo: number;

constructor(name: string, IDNo: number) {
    super(name);
    this.IDNo = IDNo;
}
    displayData():void {
        console.log(this.IDNo);
        console.log(this.name);
    }
}


var student = new Student("Vihan", 9473845);
student.displayData();

class WildAnimal {
    protected name: string;

    constructor(name: string) {
    this.name = name;
    }
}

class BigCat extends WildAnimal {
    type: string;

    constructor(name: string, type: string) {
        super(name);
        this.type = type;
    }

    displayData(): void {
        console.log(this.name);
        console.log(this.type);
    }
}

let bigCat = new BigCat("King", "Wild");
bigCat.displayData();

//example 1 of Multi-level Inheritance

class PersonA1 {                
    name: string;           //class PersonA1 have own 1 property

    constructor(name: string) {  //assign to class property
    this.name = name;
    }
}

class EmployeeA extends PersonA1 {  //all inherits from PersonA1
    empno: number;                  //own property of EmployeeA

    constructor(name: string, empno: number) { 
        super(name);                    //calls parent class
        this.empno = empno;             //assign to currant class
    }

    displayData(): void {                //EmployeeA have 2 property-name and empno
        console.log(this.empno);    
        console.log(this.name);
    }
}

class Manager extends EmployeeA {   //Inherits all 2property to manager
    department: string;             //manager also have dept his own property

    constructor(name:string, empno: number, department: string) { //3property of Manager
        super(name, empno);                 //calls both PersonA1 & EmployeeA
        this.department = department;       //assign to 
    }

    displayData(): void {          
        super.displayData();   
        console.log(this.department);
    }
}

var manager = new Manager("Arin", 101, "IT"); //create new instance 
manager.displayData();                         //method invocation


class Person0 {
    name:string;
    age:number;
    constructor(name:string,age:number) {
        this.name = name;
        this.age = age;
    }
    displayPerson(): void {
        console.log(this.name);
        console.log(this.age);
    }
}
class Student0 extends Person0 {
    grade: string;
    constructor(name:string, age: number, grade:string) {
        super(name,age);
        this.grade = grade;
    }
    displayStudent() : void {
        console.log(this.name);
        console.log(this.age);
        console.log(this.grade);
    }
}

let student1 = new Student0("Ram",10,"B");
student1.displayStudent();
 
//multi level
// Base class: Person
class PersonZ {
    name: string;

    constructor(name: string) {
        this.name = name;
            }

}

// Derived class: Student (inherits from Person)
class StudentZ extends PersonZ {
    grade: string;

    constructor(name: string, grade: string) {
        super(name); // Calls the constructor of the Person class
        this.grade = grade; // Adds a new property for the Student class
    }


}

// Another derived class: Graduate (inherits from Student)
class Graduate extends StudentZ {
    degree: string;

    constructor(name: string, grade: string, degree: string) {
        super(name, grade); // Calls the constructor of the Student class
        this.degree = degree;    // Adds a new property for the Graduate class
    }

    displayGraduateInfo(): void {
        console.log(this.name);   // Inherited from Person
          // Inherited from Person
        console.log(this.grade);  // Inherited from Student
        console.log(this.degree); // From Graduate class
    }
}

// Create an object of the Graduate class
let graduate1 = new Graduate("Alice", "A", "Computer Science");

// Call the method to display the graduate's info
graduate1.displayGraduateInfo(); // Prints the values directly
