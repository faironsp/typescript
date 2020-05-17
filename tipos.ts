//Boolean
var isDeath: boolean = false;


//Number
var age: number = 21;


//String
var fullname: string = "Erik Figueiredo";


//Array
var personsString: string[] = ['Erik', 'Fernanda'];
var personsArray: Array<string> = ['Erik', 'Fernanda'];
var personsAny: any[] = ['Erik', 30, true];


//Enum
enum Color1 { Red, Green, Blue };
var c1: Color1 = Color1.Green;
console.log(c1);

enum Color2 { Red = 1, Green, Blue };
var c2: Color2 = Color2.Green;
console.log(c2);

enum Color3 { Red = 1, Green, Blue };
var numberColor: Color3 = Color3.Green;
var nameColor: string = Color3[2];
console.log(nameColor);
console.log(numberColor);


//Any
var notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; ​// okay, definitely a boolean


//Void
function warnUser(): void {
    alert("This is my warning message");
    //return "Não pode retornar nada, é void";
}

//Returno de Dados
function isChecked(): boolean {
    return true; //Não pode retornar nada diferente de boolean
}

//let
var bool: boolean = false;

if (bool) {
    let i: number;
    for (i = 0; i < 3; i++) {
        console.log(i);
    }
}

//console.log(i); ==> Isso vai dar erro, pois o let faz com que a variável "i" funcione apenas dentro do escopo definido, no caso dentro do "if"

//tuple
let tuple: [string, number];
tuple = ["Fabio", 10];