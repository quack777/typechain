"use strict";
var name = "eunchong", age = 24, gender = "male";
var sayHi = function (name, age, gender) {
    console.log("Hello ".concat(name, ", you are ").concat(age, ", you are ").concat(gender, "!"));
};
sayHi(name, age, gender);
