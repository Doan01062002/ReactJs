class Account{
    protected accountNumber:number
    protected acces:number

    constructor(accountNumber:number, acces:number){
        this.accountNumber = accountNumber
        this.acces = acces
    }

    deposit(a:number):number{
        return this.acces += a
    }

    withdraw(a:number):void{
        if(a <= this.acces){
            this.acces -= a
            console.log("rút tiền thành công");
        }else{
            console.log("Tài khoản không đủ để ");
        }
    }
}

class SavingsAccount extends Account{
    private interestRate:number

    constructor(accountNumber:number, acces:number, interestRate:number){
        super(accountNumber,acces)
        this.interestRate = interestRate
    }

    calculateInterest():void{
        let interest = this.acces * this.interestRate

        console.log("lãi hàng tháng: "+interest);
    }
}

let account1 = new SavingsAccount(11111, 100, 0.05);

//gửi thêm tiền
account1.deposit(100)
console.log(account1);

//rút tiền quá số tiền
account1.withdraw(300)

//rút ít hơn số tiền hiện có
account1.withdraw(150)
console.log(account1);

//in lãi suất hàng tháng
account1.calculateInterest()
