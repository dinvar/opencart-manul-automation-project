class StringInfo {

    public testString() {

        //What is string - string is a primitive data type in typescript which is used to store sequence characters

        // what are the ways to create a string
        // - There are two ways to create strings with and without using new keyword
        //NONVIP - Diff between string and String -> string - primitive datatype and String wrapper class

        let str = "Hello World!";
        let str5 = new String("Hello World!");
        console.log("Length of the string: " + str.length);
        console.log("Character at index 1: " + str.toUpperCase());
        console.log("Character at index 1: " + str.toLowerCase());

        //replace - it is used to replace a character or a string with another character or string
        console.log(str.replace('H', 'A'));
        //Substring - it is nothing but a part of a string
        //if we wanted extract a part of a string, we can use substring method
        //Syntax: str.substring(startIndex, endIndex) -> it will return the string from startIndex to endIndex-1
        //        //Syntax: str.substring(startIndex) -> it will return the string from startIndex to end of the string
        console.log(str.substring(6));

        //VVIP
        console.log(str.includes('Helljo'));

        //Split - it is used to split a string into an array of substrings\
        let str1 = "India,is,my,country"; // let arr[] = ["India", "is", "my", "country"]
        console.log(str1);
        let strArray = str1.split(",");
        console.log(strArray);

        let str3 = "ABcbdcjhs"; //[AB, bd, jhs]
        let str3Arr = str3.split('c')
        console.log(str3Arr);

        //Trim
        let dadi = "         Dadi             ";
        console.log(dadi);

        console.log(dadi.trim());

        //Starts at and ends at
        //To check whether string has word at the start and at the end we use starts at and starts at method
        let personalitytraits: string = "Ravi is kamchukar";
        console.log(personalitytraits.endsWith("kamchukar"));
        console.log(personalitytraits.startsWith("Ravi"))

        //check index of character
        console.log(personalitytraits.indexOf('r'));
        console.log(personalitytraits.lastIndexOf('r'));

        //Get character at indesx - charAt(index) VVIP
        console.log(personalitytraits.charAt(1));

        console.log(personalitytraits);   


        let name : string = "Deepak";
        let name2 = "Deepak"; //name2= name
        console.log(name);
        

    }

    //string in immutable in typescript
    // Immutable - we cannot change value of string
    //You are sau=ying strin is immutable but we can ressign value to string?
    // Basically when we reassign value it actually does not change the value of exising strin. it create new string object instead

    //It does not store the duplicate value



}

let stringInfo = new StringInfo();
stringInfo.testString();



















// console.log("Length of the string: " + str.length);
//         console.log("Character at index 1: " + str.charAt(1));
//         console.log("Substring from index 1 to 4: " + str.substring(1, 4));
//         console.log("Index of 'o': " + str.indexOf('o'));
//         console.log("Last index of 'o': " + str.lastIndexOf('o'));
//         console.log("Replace 'World' with 'Universe': " + str.replace('World', 'Universe'));
//         console.log("To Upper Case: " + str.toUpperCase());
//         console.log("To Lower Case: " + str.toLowerCase());
//         console.log("Trim: " + "   Hello World!   ".trim());