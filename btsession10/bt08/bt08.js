"use strict";
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    update(width, height) {
        this.width = width;
        this.height = height;
    }
    S() {
        return this.width * this.height;
    }
    radius() {
        return (Math.sqrt(this.width ** 2 + this.height ** 2)) / 2;
    }
    print() {
        let P = (this.width + this.height) * 2;
        return console.log(`chiều dài:${this.height}; chiều rộng:${this.width}; chu vi:${P}; diện tích:${this.S()}`);
    }
}
let rectangle1 = new Rectangle(4, 8);
rectangle1.print(); //chưa cập nhật
//sau cập nhật
rectangle1.update(2, 9);
rectangle1.print();
