"use strict";
class Account {
    constructor(accountNumber, acces) {
        this.accountNumber = accountNumber;
        this.acces = acces;
    }
    deposit(a) {
        return this.acces += a;
    }
    withdraw(a) {
        if (a <= this.acces) {
            this.acces -= a;
            console.log("rút tiền thành công");
        }
        else {
            console.log("Tài khoản không đủ để ");
        }
    }
}
class SavingsAccount extends Account {
    constructor(accountNumber, acces, interestRate) {
        super(accountNumber, acces);
        this.interestRate = interestRate;
    }
    calculateInterest() {
        let interest = this.acces * this.interestRate;
        console.log("lãi hàng tháng: " + interest);
    }
}
let account1 = new SavingsAccount(11111, 100, 0.05);
//gửi thêm tiền
account1.deposit(100);
console.log(account1);
//rút tiền quá số tiền
account1.withdraw(300);
//rút ít hơn số tiền hiện có
account1.withdraw(150);
console.log(account1);
//in lãi suất hàng tháng
account1.calculateInterest();
