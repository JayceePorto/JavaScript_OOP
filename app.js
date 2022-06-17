console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

class Person {
    constructor (name, pets, residence, hobbies) {

        this.name = name;
        this.pets = pets;
        this.residence = residence;
        this.hobbies = hobbies;
    }

    addHobby() {
        this.hobbies.push(hobby);
    }

    removeHobby() {
        let foundIdx = this.hobbies.indexOf(hobby);

        let valuesBefore = this.hobbies.slice(0, foundIdx);

        let valuesAfter = this.hobbies.slice(foundIdx + 1);

        this.hobbies = valuesBefore.concat(valuesAfter);
    }

    greeting() {
        console.log("Hello fellow person!")
    }

    info() {}
}

//Exercise 2

class Coder extends Person {
    constructor(name, pets, residence, hobbies, occupation) {
        super(name, pets, residence, hobbies);

        this.occupation = occupation;
    }

    greeting() {
        console.log("Hello, I am a coder!");
    }
}

//Exercise 3a

let person = newPerson("Jaycee", 0, "Hoover", ["hiking", "baking", "reading"], "Web Developer" );

person.addHobby("drawing");

console.log(person);

person.removeHobby("hiking");

console.log(person);

// Exercise 3b

let coder = new Coder("Jaycee", 0, "Hoover", ["html", "css", "javascript"]);

coder.addHobby("react");

console.log(coder);

coder.removeHobby("html");

console.log(coder);

//Exercise 4

class Calculator {
    constructor () {
        this.result = 0;
    }

    add(a, b) {
        this.result = a + b;
        return this.result;
    }

    subtract(a, b) {
        this.result = a - b;
        return this.result;
    }

    multiply(a, b) {
        this.result = a * b;
        return this.result;
    }

    divide(a, b) {
        this.result = a / b;
        return this.result;
    }

    display() {
        console.log(this.result);
    }
}

let calc = new Calculator();

calc.add(0, 1);
calc.display();
calc.subtract(6, 3);
calc.display();
calc.multiply(8, 3);
calc.display();
calc.divide(10, 5);
calc.display();