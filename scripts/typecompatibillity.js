"use strict";
class AnotherExample1 {
    constructor() {
        this.name = "";
        this.age = 0;
    }
    AnotherExample1(name, age) {
        this.name = name;
        this.age = age;
    }
}
class AnotherExample2 {
    constructor() {
        this.num = 0;
    }
}
let exVar;
exVar = new AnotherExample1();
//exVar = new AnotherExample2(); //Não deixa pois não tem a mesma estrutura de dados
let exVar2 = { name: "Fabio", age: 34 };
exVar = exVar2; // Vai deixar pois tem a mesma estrutura de dados
//exVar = {name: "", age: 0}; // Não deixa
function testeExample1(ex) {
    console.log(ex.name);
}
let exVar3 = { name: "", age: 0 };
testeExample1(exVar3);
//testeExample1({ name: "", age: 0 }); //Não pode
//Comparação de duas funções
let x1 = (a) => a;
let x2 = (b, s) => b;
//let x2 = (b: number, s: string) => b + s;
console.log(x1(10));
console.log(x2(10, "something"));
x2 = x1;
console.log(x2(20, "something2")); // Na verdade ele usou a função x1 pois ele fez o descarte de argumentos da função
