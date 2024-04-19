"use strict";
function add(a, b) {
    if (typeof a === 'string') {
        if (isNaN(Number(a))) {
            return 'Không hợp lệ';
        }
        else {
            a = Number(a);
        }
    }
    if (typeof b === 'string') {
        if (isNaN(Number(b))) {
            return 'Không hợp lệ';
        }
        else {
            b = Number(b);
        }
    }
    return a + b;
}
function subtract(a, b) {
    if (typeof a === 'string') {
        if (isNaN(Number(a))) {
            return 'Không hợp lệ';
        }
        else {
            a = Number(a);
        }
    }
    if (typeof b === 'string') {
        if (isNaN(Number(b))) {
            return 'Không hợp lệ';
        }
        else {
            b = Number(b);
        }
    }
    return a - b;
}
function multiply(a, b) {
    if (typeof a === 'string') {
        if (isNaN(Number(a))) {
            return 'Không hợp lệ';
        }
        else {
            a = Number(a);
        }
    }
    if (typeof b === 'string') {
        if (isNaN(Number(b))) {
            return 'Không hợp lệ';
        }
        else {
            b = Number(b);
        }
    }
    return a * b;
}
function divide(a, b) {
    if (typeof a === 'string') {
        if (isNaN(Number(a))) {
            return 'Không hợp lệ';
        }
        else {
            a = Number(a);
        }
    }
    if (typeof b === 'string') {
        if (isNaN(Number(b))) {
            return 'Không hợp lệ';
        }
        else {
            b = Number(b);
        }
    }
    if (b === 0) {
        return 'Không hợp lệ';
    }
    return a / b;
}
console.log(add(5, 10));
console.log(add("5", 10));
console.log(add("abc", 10));
console.log(subtract(10, 5));
console.log(subtract("10", 5));
console.log(subtract("abc", 5));
console.log(multiply(5, 10));
console.log(multiply("5", 10));
console.log(multiply("abc", 10));
console.log(divide(10, 5));
console.log(divide("10", 5));
console.log(divide("abc", 5));
console.log(divide(10, 0));
