"use strict";
function validatePerson(a) {
    if (typeof (a.name) === "string" && typeof (a.age) === "number" && typeof (a.address) === "object") {
        return true;
    }
    return false;
}
let student1 = {
    name: "đoan",
    age: 21,
    address: {
        country: "VN",
        city: "HN"
    }
};
console.log(validatePerson(student1));
