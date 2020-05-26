import { EmailValidatorExternal } from "./EmailValidatorExternal";
import { UrlValidatorExternal } from "./UrlValidatorExternal";


let emailExamples2 = ["sdf@", "sdf@fdsfd", "faironsp@gmail.com"];
let urlExamples2 = ["dfsdf.com.br", "www.fasadas.com.br", "http://www.fdfds.com.br"];

emailExamples.forEach(email => {
    console.log(`${email}   ${new EmailValidatorExternal().isValid(email)}`)
});

urlExamples.forEach(url => {
    console.log(`${url}   ${new UrlValidatorExternal().isValid(url)}`)
});