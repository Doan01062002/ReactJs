"use strict";
class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        return console.log(`${this.name} - ${this.company} - ${this.phone}`);
    }
}
class Maneger extends Employee {
    constructor(name, company, phone, teamSize) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInfo() {
        super.printInfo();
        console.log(` ${this.teamSize}`);
    }
}
let employee1 = new Employee("dương", "rikkei", "111111");
let maneger1 = new Maneger("đoan", "rikkei", "222222", 100);
console.log(employee1.printInfo());
console.log(maneger1.printInfo());
