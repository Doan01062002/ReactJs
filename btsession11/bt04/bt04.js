"use strict";
class Vehicle {
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown() {
        return this.speed--;
    }
    speedUp() {
        return this.speed++;
    }
    showSpeed() {
        console.log(this.speed);
    }
}
class Bycycle extends Vehicle {
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.name = name;
        this.speed = speed;
        this.id = id;
        this.gear = gear;
    }
}
let bycycle1 = new Bycycle("đoan", 50, 1, 4);
//giảm tốc
bycycle1.slowDown();
bycycle1.showSpeed();
