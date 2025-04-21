import fs from 'fs';
import csv from 'csv-parser';

// Define the Student class
class Student {
    name: string;
    age: number;
    grade: string;

    constructor(name: string, age: number, grade: string) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    // Static method to read the CSV file
    static async readCSV(filePath: string): Promise<Student[]> {
        return new Promise((resolve, reject) => {
            const results: Student[] = [];
            fs.createReadStream(filePath)
                .pipe(csv())
                .on('data', (data) => {
                    const student = new Student(data.name, data.age, data.grade);
                    results.push(student);
                })
                .on('end', () => resolve(results))
                .on('error', (err) => reject(err));
        });
    }
}

// Example usage of reading the CSV file
async function main() {
    const student = await Student.readCSV('src/testdata/studentData.csv');
    console.log(student);
}

main();
