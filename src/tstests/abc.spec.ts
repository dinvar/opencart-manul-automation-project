import fs from 'fs';
import csv from 'csv-parser';

class Student2 {
    static async readCSV(filePath: string): Promise<any[]> {
        return new Promise((resolve, reject) => {
            const results: any[] = [];
            fs.createReadStream(filePath)
                .pipe(csv())
                .on('data', (data) => results.push(data))
                .on('end', () => resolve(results))
                .on('error', (err) => reject(err));
        });
    }
}

// Usage in a test
(async () => {
    const testData1 = await Student2.readCSV('src/testdata/studentData.csv');
    console.log(testData1);  // Test data from CSV file
})();
