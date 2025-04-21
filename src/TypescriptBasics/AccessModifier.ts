class Person {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }   
}

const person = new Person("John Doj");
console.log(person.name);

class Animal {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const wildanimal = new Animal("Tiger");
console.log(wildanimal.name)
