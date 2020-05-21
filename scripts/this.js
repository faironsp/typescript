"use strict";
//"noImplicitAny": false
//Quando essa property estiver marcada ou não vai proibir o seguinte uso abaixo
function testThis() {
    //return this; // como a função está solta, vai retornar o document
    //Comentei para compilar
}
console.log(testThis);
console.log(this);
var objExample = {
    name: "Fabio",
    lastName: "Andrade",
    fullName: function () {
        return this;
    },
    fullName2: function () {
        //return this; //não vai deixar, ele diz que é um globalThis
    }
};
var lottery = {
    name: ["Fabio", "Karina", "Marisa"],
    test: "lalala",
    createLotteryPicker: function () {
        var _this = this;
        console.log("First level this: " + this.name + " " + this.test);
        return function () {
            console.log("Segund level this: " + _this);
            var pickerPersonNumber = Math.floor(Math.random() * 3);
            return { name: _this.name[pickerPersonNumber] };
        };
    }
};
var personPicker = lottery.createLotteryPicker();
var pickedPerson = personPicker();
console.log(pickedPerson);
