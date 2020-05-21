"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.print = function () {
        console.log("name: " + this.name);
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, salary) {
        var _this = _super.call(this, name) || this;
        _this.salary = 10;
        _this.age = 0;
        return _this;
    }
    Employee.prototype.print = function () {
        _super.prototype.print.call(this);
        console.log("salary: " + this.salary);
    };
    return Employee;
}(Person));
var p1 = new Person("Fabio");
var emp1 = new Employee("Nome", 10);
var p2 = { name: "valor da string" };
var p3 = {}; // Não usar
p3.name = "Nome da pessoa";
