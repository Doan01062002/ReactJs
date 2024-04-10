"use strict";
function printType(type) {
    console.log(type);
}
printType(5);
printType("đoan");
let obj = {
    name: "đoan",
    age: 21
};
console.log(obj);
// Intersection type bắt buộc phải tuân thủ theo tất cả kiểu trong intersection
