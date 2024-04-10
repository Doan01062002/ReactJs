"use strict";
function calculateArea(shape) {
    if (shape.type === "square") {
        return shape.sideLength ** 2;
    }
    else {
        return Math.PI * shape.radius ** 2;
    }
}
const square = { type: 'square', sideLength: 5 };
const circle = { type: 'circle', radius: 3 };
console.log(calculateArea(square));
console.log(calculateArea(circle));
