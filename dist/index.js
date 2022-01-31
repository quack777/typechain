"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Human = /** @class */ (function () {
    function Human(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    return Human;
}());
var eunchong = new Human("eunchong", 23, "male");
var sayHi = function (person) {
    return "Hello ".concat(person.name, ", you are ").concat(person.age, ", you are ").concat(person.gender, "!!");
};
console.log(sayHi(eunchong));
