"use strict";
function flattenArray(arr) {
    return arr.reduce((result, element) => {
        if (Array.isArray(element)) {
            return result.concat(flattenArray(element));
        }
        return result.concat(element);
    }, []);
}
// Sử dụng hàm flattenArray
const nestedArray = [1, [2, [3, 4], 5], 6];
console.log(flattenArray(nestedArray));
