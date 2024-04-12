"use strict";
class Shape {
    caculateArea() {
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
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    caculateArea() {
        return Math.PI * (this.radius ** 2);
    }
}
let rectangle1 = new Rectangle(5, 8);
let circle1 = new Circle(6);
console.log("diện tích hình CN" + rectangle1.caculateArea());
console.log("diện tích hình tròn" + circle1.caculateArea());
