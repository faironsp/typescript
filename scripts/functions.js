"use strict";
function print2(val) {
    console.log(val);
}
print2("message here");
function printOrNot(flag = false) {
    let str = flag ? "flag is true" : "flag is false";
    console.log(str);
}
printOrNot(true);
//Anonymous Function
let sumAnonymous = function (n1, n2) {
    console.log(`sum: ${n1 + n2}`);
};
sumAnonymous(1, 2);
function sumNotAnonymous(n1, n2) {
    console.log(`sum: ${n1 + n2}`);
}
sumNotAnonymous(1, 2);
//Labda (Arrow Function)
let Print = () => console.log("Hello TypeScript");
let sumArrow0 = (n1, n2) => n1 + n2; // Sem informar
let sumArrow1 = (n1, n2) => n1 + n2;
let sumArrow2 = (n1, n2) => {
    return n1 + n2;
};
let objectArrow1 = (name, surname) => ({ name: name, surname: surname });
let objectArrow2 = (name, surname) => {
    return { name: name, surname: surname };
};
