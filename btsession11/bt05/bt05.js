"use strict";
class Parent {
    constructor(name, height) {
        this.name = name;
        this.height = height;
    }
    printInfor() {
        console.log(this.name);
        console.log(this.height);
    }
}
class Children extends Parent {
    constructor(name, height) {
        super(name, height);
    }
    printInforChild() {
        // console.log(this.name);//lỗi biên dịch
        console.log(this.height);
    }
}
