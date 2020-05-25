"use strict";
var AnotherExample1 = /** @class */ (function () {
    function AnotherExample1() {
        this.name = "";
        this.age = 0;
    }
    AnotherExample1.prototype.AnotherExample1 = function (name, age) {
        this.name = name;
        this.age = age;
    };
    return AnotherExample1;
}());
var AnotherExample2 = /** @class */ (function () {
    function AnotherExample2() {
        this.num = 0;
    }
    return AnotherExample2;
}());
var exVar;
exVar = new AnotherExample1();
//exVar = new AnotherExample2(); //Não deixa pois não tem a mesma estrutura de dados
var exVar2 = { name: "Fabio", age: 34 };
exVar = exVar2; // Vai deixar pois tem a mesma estrutura de dados
//exVar = {name: "", age: 0}; // Não deixa
function testeExample1(ex) {
    console.log(ex.name);
}
var exVar3 = { name: "", age: 0 };
testeExample1(exVar3);
//testeExample1({ name: "", age: 0 }); //Não pode
//Comparação de duas funções
var x1 = function (a) { return a; };
var x2 = function (b, s) { return b; };
//let x2 = (b: number, s: string) => b + s;
console.log(x1(10));
console.log(x2(10, "something"));
x2 = x1;
console.log(x2(20, "something2")); // Na verdade ele usou a função x1 pois ele fez o descarte de argumentos da função
