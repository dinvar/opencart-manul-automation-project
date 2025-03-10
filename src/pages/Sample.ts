import { publicDecrypt } from "crypto";

export async function sayHello(personName : string) {

    console.log("Hello " + personName);
}

export async function printSurname(surname : string) {

    console.log("Hello " + surname);
}

export class Sample {

    async getStudentsDetails() : Promise<object> {
     var studentdetails : {studentID : number, studentName : string} = {
        studentID : 1,
        studentName : "Ravi"
     }
     return studentdetails;
    }
}