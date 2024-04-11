"use strict";
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    S() {
        return 2 * Math.PI * this.radius ** 2;
    }
    P() {
        return 2 * Math.PI * this.radius;
    }
}
let circle = new Circle(4);
console.log(circle.S());
console.log(circle.P());
