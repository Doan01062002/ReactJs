"use strict";
function parseInput(a) {
    if (a === "number") {
        console.log("trả về number");
    }
    else if (a === true || a === false) {
        console.log("trả về giá trị boolean");
    }
    else if (a === "string") {
        console.log("trả về giá trị string");
    }
    else if (a === null) {
        console.log("trả về null");
    }
    else if (a === undefined) {
        console.log("trả về underfined");
    }
}
console.log(parseInput("number"));
