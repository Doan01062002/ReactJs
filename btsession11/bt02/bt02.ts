class Employee{
    public name:string
    protected company:string
    private phone:string

    constructor(name:string, company:string, phone:string){
        this.name = name
        this.company = company
        this.phone = phone
    }

    printInfo(){
        return console.log(`${this.name} - ${this.company} - ${this.phone}`);
    }
}

class Maneger extends Employee{
    teamSize:number
    constructor(name:string, company:string, phone:string, teamSize:number){
        super(name,company,phone)
        this.teamSize =teamSize
    }

    printInfo():void {
        super.printInfo()
        console.log(` ${this.teamSize}`);
        
    }
}

let employee1 = new Employee("dương", "rikkei", "111111")
let maneger1 = new Maneger("đoan", "rikkei", "222222", 100)

console.log(employee1.printInfo());
console.log(maneger1.printInfo());

