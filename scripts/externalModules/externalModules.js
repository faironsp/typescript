"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EmailValidatorExternal_1 = require("./EmailValidatorExternal");
const UrlValidatorExternal_1 = require("./UrlValidatorExternal");
let emailExamples2 = ["sdf@", "sdf@fdsfd", "faironsp@gmail.com"];
let urlExamples2 = ["dfsdf.com.br", "www.fasadas.com.br", "http://www.fdfds.com.br"];
emailExamples.forEach(email => {
    console.log(`${email}   ${new EmailValidatorExternal_1.EmailValidatorExternal().isValid(email)}`);
});
urlExamples.forEach(url => {
    console.log(`${url}   ${new UrlValidatorExternal_1.UrlValidatorExternal().isValid(url)}`);
});
