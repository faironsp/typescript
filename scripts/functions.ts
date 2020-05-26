function print2(val?: string): void {
    console.log(val);
}

print2("message here");

function printOrNot(flag: boolean = false): void {
    let str = flag ? "flag is true" : "flag is false";
    console.log(str);
}

printOrNot(true);

//Anonymous Function
let sumAnonymous = function (n1: number, n2: number): void {
    console.log(`sum: ${n1 + n2}`);
}

sumAnonymous(1, 2);

function sumNotAnonymous(n1: number, n2: number): void {
    console.log(`sum: ${n1 + n2}`);
}

sumNotAnonymous(1, 2);

//Labda (Arrow Function)

let Print = () => console.log("Hello TypeScript");

let sumArrow0 = (n1: number, n2: number) => n1 + n2; // Sem informar
let sumArrow1 = (n1: number, n2: number): number => n1 + n2;

let sumArrow2 = (n1: number, n2: number) => {
    return n1 + n2;
}

let objectArrow1 = (name: string, surname:string) => ({name: name, surname: surname});

let objectArrow2 = (name: string, surname:string) => {
    return {name: name, surname: surname};
};