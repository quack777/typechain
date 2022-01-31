"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person = {
    name: "eunchong",
    age: 23,
    gender: "male",
};
var sayHi = function (person) {
    return "Hello ".concat(person.name, ", you are ").concat(person.age, ", you are ").concat(person.gender, "!!");
};
console.log(sayHi(person));
