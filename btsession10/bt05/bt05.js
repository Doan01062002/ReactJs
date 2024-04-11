"use strict";
class Department {
    constructor(id, name, employee) {
        this.id = id;
        this.name = name;
        this.employee = employee;
    }
    describle() {
        console.log(this.id);
        console.log(this.name);
    }
}
let department1 = new Department(1, "nhân sự", ["đoan", "hoàng", "dương"]);
department1.describle();
