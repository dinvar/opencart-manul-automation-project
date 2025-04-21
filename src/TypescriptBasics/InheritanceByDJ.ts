// export class Class1 {
//     age: number = 20;
//     name: string = "John";

//     public display() {
//         console.log("Name: "  + name + " Age: " + age);

//     }
// }

// class Class2 {  //jya classchya Method&Variable use karaych ahe tyacha object create karava lagto
//     public display2() {
//         var obj : Class1 = new Class1();
//         obj.display();
//         console.log(" Age: " + age);
//     }
    
// }

class Class3 {
    public age = 20;
    public name = "John";

    public displayAge() {                       
        console.log("Age: " + this.age);
    }

    public displayName() {                  //displayName() is a method
        console.log("Name: " + this.name);
    }
}

class Class4 extends Class3 {              
    public displayName() {
        console.log("BB John");
    
    }
}

let instance = new Class4();    //created object of Class4 Syntax:variableName=new ClassName();
instance.displayName();         //method call: variablename.methodname();
instance.displayAge();

//example2
class Vehicle {
    move() {
        return "The Vehicle is moving";
    }
}
class Car extends Vehicle {
    move() {
        return "The car is driving";
    }
}
class Boat extends Vehicle {
    move() {
        return "The boat is sailing";
    }
}
class AmphibiousVehicle extends Car {

}
const mystery = new AmphibiousVehicle();
console.log(mystery.move());    //o/p=The Car is driving