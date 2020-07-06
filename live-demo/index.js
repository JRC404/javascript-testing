const addition = (num1, num2) => {
    return num1 + num2;
}

const subtraction = (numeroUno, numeroDos) => {
    return numeroUno - numeroDos;
} 

const studentNames = ["Adam", "Harry", "another student"];

class Person {
    constructor(name, strength) {
        this.name = name;
        this.strength = strength;
    }

    train() {
        this.strength++;
    }

    beLazy() {
        this.strength--;
    }
}

const james = new Person("James", 56);

let value; 

module.exports = {
    addition,
    subtraction,
    studentNames,
    james,
    value
}