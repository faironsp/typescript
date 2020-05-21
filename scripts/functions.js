"use strict";
function print(val) {
    console.log(val);
}
print("message here");
function printOrNot(flag) {
    if (flag === void 0) { flag = false; }
    var str = flag ? "flag is true" : "flag is false";
    console.log(str);
}
printOrNot(true);
//Anonymous Function
var sumAnonymous = function (n1, n2) {
    console.log("sum: " + (n1 + n2));
};
sumAnonymous(1, 2);
function sumNotAnonymous(n1, n2) {
    console.log("sum: " + (n1 + n2));
}
sumNotAnonymous(1, 2);
//Labda (Arrow Function)
var Print = function () { return console.log("Hello TypeScript"); };
var sumArrow0 = function (n1, n2) { return n1 + n2; }; // Sem informar
var sumArrow1 = function (n1, n2) { return n1 + n2; };
var sumArrow2 = function (n1, n2) {
    return n1 + n2;
};
var objectArrow1 = function (name, surname) { return ({ name: name, surname: surname }); };
var objectArrow2 = function (name, surname) {
    return { name: name, surname: surname };
};
