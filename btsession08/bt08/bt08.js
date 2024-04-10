"use strict";
function obj(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const person = { name: "John", age: 25 };
const address = { city: "New York", country: "USA" };
console.log(obj(person, address));
