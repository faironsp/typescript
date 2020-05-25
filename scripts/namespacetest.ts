/// <reference path="Validation.ts">
/// <reference path="UrlValidator.ts">
/// <reference path="EmailValidator.ts">
import EmailValidator = Validation.EmailValidator;
import UrlValidator = Validation.UrlValidator;

let emailExamples = ["sdf@", "sdf@fdsfd", "faironsp@gmail.com"];
let urlExamples = ["dfsdf.com.br", "www.fasadas.com.br", "http://www.fdfds.com.br"];

emailExamples.forEach(email => {
    console.log(`${email}   ${new EmailValidator().isValid(email)}`)
});

urlExamples.forEach(url => {
    console.log(`${url}   ${new UrlValidator().isValid(url)}`)
});


