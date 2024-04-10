"use strict";
function check(a) {
    if (typeof (a) === "number" || typeof (a) === "string" || typeof (a) === "object") {
        console.log(typeof (a));
    }
    else {
        console.log("kiểu dữ liệu khác");
    }
}
console.log(check(1));
