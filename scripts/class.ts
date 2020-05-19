class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    print(): void {
        console.log(`name: ${this.name}`);
    }
}

class Employee extends Person {
    salary: number;
    private age: number;

    constructor(name: string, salary: number) {
        super(name);
        this.salary = 10;
        this.age = 0;
    }

    print(): void {
        super.print();
        console.log(`salary: ${this.salary}`);
    }
}

let p1 = new Person("Fabio");
let emp1 = new Employee("Nome", 10);

let p2 = { name: "valor da string" } as Person;

let p3 = <Person>{}; // Não usar
p3.name = "Nome da pessoa";