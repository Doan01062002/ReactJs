"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    printInfo() {
        return console.log(this.name);
    }
}
class Student extends Person {
    constructor(id, name) {
        super(name);
        this.id = id;
        this.name = name;
    }
    printInfo() {
        console.log(this.id + " " + this.name);
    }
}
let person1 = new Person("Doan");
let student1 = new Student(2, "con");
person1.printInfo();
student1.printInfo();
