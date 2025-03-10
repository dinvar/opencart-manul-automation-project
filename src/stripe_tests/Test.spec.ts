import { ParameterizedFunctions } from '../pages/ParameterizedFunctions';
import { test, expect } from '@playwright/test';
import { sayHello, printSurname, Sample } from '../pages/Sample'
// import fs from 'fs';
// import csv from 'csv-parser';

// async function readCSV(filePath: string): Promise<any[]> {
//     return new Promise((resolve, reject) => {
//         const results: any[] = [];
//         fs.createReadStream(filePath)
//             .pipe(csv())
//             .on('data', (data) => results.push(data))
//             .on('end', () => resolve(results))
//             .on('error', (err) => reject(err));
//     });
// }

test('Addition and Multiplication oF Two Number', async() =>{
    //Const variableName : ClassName = new ClassName();
 
    const parameterizedFunctions : ParameterizedFunctions = new ParameterizedFunctions();
    await parameterizedFunctions.addition(1,2,3,4)
    var result2 = await parameterizedFunctions.getAdditionOfTwoNumbers(2,3);
    var result1 = await parameterizedFunctions.getMultiplicationsOfTwoNumber(5,3);
    let name:string = null;
    if (name == null){
        console.log("It has null value");
    }
    else{ 
        console.log("It has some value");
    }
    //console.log(await parameterizedFunctions.getAdditionOfTwoNumbers(5,3))
    console.log(result2+result1);
    const finalResult = result2+result1;
    await expect(finalResult).toBe(20);
});

 test('Print Name', async() =>{
     const parameterizedFunctions : ParameterizedFunctions = new ParameterizedFunctions();
     const result = await parameterizedFunctions.getPrintName("Ravi","Jadhav");
    console.log(result);
     await expect(result).toBe("RaviJadhav");
 });

