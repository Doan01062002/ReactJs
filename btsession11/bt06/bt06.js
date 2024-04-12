"use strict";
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getDescription() {
        console.log(this.name);
        console.log(this.price);
    }
}
class Electronic extends Product {
    constructor(name, price, brand) {
        super(name, price);
        this.name = name;
        this.price = price;
        this.brand = brand;
    }
    getDescription() {
        console.log(this.name);
        console.log(this.price);
        console.log(this.brand);
    }
}
let electronic1 = new Electronic("iphone", 100000000, "apple");
electronic1.getDescription();
