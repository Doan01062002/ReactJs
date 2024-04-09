"use strict";
function removeFalsyProperties(obj) {
    const result = {};
    for (let key in obj) {
        if (obj[key]) {
            result[key] = obj[key];
        }
    }
    return result;
}
const input = {
    a: null,
    b: false,
    c: true,
    d: 0,
    e: 1,
    f: '',
    g: 'a',
};
const output = removeFalsyProperties(input);
console.log(output);
