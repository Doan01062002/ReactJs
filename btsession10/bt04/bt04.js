"use strict";
class Employee {
    constructor(name, company, phone, id) {
        this.name = name;
        this.company = company;
        this.phone = phone;
        this.id = id;
    }
    get printInfo() {
        return console.log(this.name + " " + this.company + " " + this.phone + " " + this.id);
    }
}
let employee1 = new Employee("Đoan", "rikkei", "0339533380", 1);
//trc khi cập nhật
employee1.printInfo;
//sau khi cập nhật
// employee1.id = 2;//báo lỗi không thể gán
employee1.printInfo;
