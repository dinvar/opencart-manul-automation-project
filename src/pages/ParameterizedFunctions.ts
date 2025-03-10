import { Console } from "console";

export class ParameterizedFunctions
{
    async getAdditionOfTwoNumbers(a: number, b: number) : Promise<number> {
        return await a + b;
    }
    
    
     
    async getMultiplicationsOfTwoNumber(a: number, b: number) : Promise<number> {
        return await a * b;

    }   
    
    async addition(...numbers : number[]) {
        console.log(numbers)
    }

    async getPrintName(firstName: string, lastName: string) : Promise<string> {
        return await firstName + lastName;
    }
}