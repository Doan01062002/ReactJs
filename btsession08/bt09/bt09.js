"use strict";
function check(a) {
    if (typeof (a) === "number") {
        return a ** a;
    }
    else if (Array.isArray(a)) {
        return a.length;
    }
    else if (typeof (a) === "string") {
        return a.length;
    }
    else {
        return console.log("không hợp lệ");
    }
}
console.log(check("đoan"));
console.log(check(5));
console.log(check(["doan", 21]));
