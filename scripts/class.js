"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    print() {
        console.log(`name: ${this.name}`);
    }
}
class Employee extends Person {
    constructor(name, salary) {
        super(name);
        this.salary = 10;
        this.age = 0;
    }
    print() {
        super.print();
        console.log(`salary: ${this.salary}`);
    }
}
let p1 = new Person("Fabio");
let emp1 = new Employee("Nome", 10);
let p2 = { name: "valor da string" };
let p3 = {}; // Não usar
p3.name = "Nome da pessoa";
