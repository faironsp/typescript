"use strict";
/// <reference path="Validation.ts">
/// <reference path="UrlValidator.ts">
/// <reference path="EmailValidator.ts">
var EmailValidator = Validation.EmailValidator;
var UrlValidator = Validation.UrlValidator;
var emailExamples = ["sdf@", "sdf@fdsfd", "faironsp@gmail.com"];
var urlExamples = ["dfsdf.com.br", "www.fasadas.com.br", "http://www.fdfds.com.br"];
emailExamples.forEach(function (email) {
    console.log(email + "   " + new EmailValidator().isValid(email));
});
urlExamples.forEach(function (url) {
    console.log(url + "   " + new UrlValidator().isValid(url));
});
