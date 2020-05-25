var Validation;
(function (Validation) {
    //Obs: coloquei qualquer RegExp, somente para testar!
    var urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    var UrlValidator = /** @class */ (function () {
        function UrlValidator() {
        }
        UrlValidator.prototype.isValid = function (str) {
            return urlRegex.test(str);
        };
        return UrlValidator;
    }());
    Validation.UrlValidator = UrlValidator;
})(Validation || (Validation = {}));
var Validation;
(function (Validation) {
    var emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    var EmailValidator = /** @class */ (function () {
        function EmailValidator() {
        }
        EmailValidator.prototype.isValid = function (str) {
            return emailRegex.test(str);
        };
        return EmailValidator;
    }());
    Validation.EmailValidator = EmailValidator;
})(Validation || (Validation = {}));
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
