"use strict";
class Shape {
    caculateArea() {
        return 0;
    }
    calculatePerimeter() {
        return 0;
    }
}
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    caculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return (this.width + this.height) * 2;
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    caculateArea() {
        return Math.PI * (this.radius ** 2);
    }
    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
let rectangle1 = new Rectangle(5, 8);
let circle1 = new Circle(6);
console.log("diện tích hình CN: " + rectangle1.caculateArea());
console.log("diện tích hình tròn: " + circle1.caculateArea());
console.log("chu vi hình CN: " + rectangle1.calculatePerimeter());
console.log("chu vi hình tròn: " + circle1.calculatePerimeter());
