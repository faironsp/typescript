"use strict";
//"noImplicitAny": false
//Quando essa property estiver marcada ou não vai proibir o seguinte uso abaixo
function testThis() {
    //return this; // como a função está solta, vai retornar o document
    //Comentei para compilar
}
console.log(testThis);
console.log(this);
let objExample = {
    name: "Fabio",
    lastName: "Andrade",
    fullName: function () {
        return this;
    },
    fullName2: () => {
        //return this; //não vai deixar, ele diz que é um globalThis
    }
};
let lottery = {
    name: ["Fabio", "Karina", "Marisa"],
    test: "lalala",
    createLotteryPicker: function () {
        console.log("First level this: " + this.name + " " + this.test);
        return () => {
            console.log("Segund level this: " + this);
            let pickerPersonNumber = Math.floor(Math.random() * 3);
            return { name: this.name[pickerPersonNumber] };
        };
    }
};
let personPicker = lottery.createLotteryPicker();
let pickedPerson = personPicker();
console.log(pickedPerson);
