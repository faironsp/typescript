"use strict";
//Boolean
var isDeath = false;
//Number
var age = 21;
//String
var fullname = "Erik Figueiredo";
//Array
var personsString = ['Erik', 'Fernanda'];
var personsArray = ['Erik', 'Fernanda'];
var personsAny = ['Erik', 30, true];
//Enum
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 0] = "Red";
    Color1[Color1["Green"] = 1] = "Green";
    Color1[Color1["Blue"] = 2] = "Blue";
})(Color1 || (Color1 = {}));
;
var c1 = Color1.Green;
console.log(c1);
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue";
})(Color2 || (Color2 = {}));
;
var c2 = Color2.Green;
console.log(c2);
var Color3;
(function (Color3) {
    Color3[Color3["Red"] = 1] = "Red";
    Color3[Color3["Green"] = 2] = "Green";
    Color3[Color3["Blue"] = 3] = "Blue";
})(Color3 || (Color3 = {}));
;
var numberColor = Color3.Green;
var nameColor = Color3[2];
console.log(nameColor);
console.log(numberColor);
//Any
var notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
//Void
function warnUser() {
    alert("This is my warning message");
    //return "Não pode retornar nada, é void";
}
//Returno de Dados
function isChecked() {
    return true; //Não pode retornar nada diferente de boolean
}
//let
var bool = false;
if (bool) {
    var i = void 0;
    for (i = 0; i < 3; i++) {
        console.log(i);
    }
}
//console.log(i); ==> Isso vai dar erro, pois o let faz com que a variável "i" funcione apenas dentro do escopo definido, no caso dentro do "if"
//tuple
var tuple;
tuple = ["Fabio", 10];
