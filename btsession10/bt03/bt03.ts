class Employee{
    public name:string;
    protected company:string;
    private phone:string;

    constructor(name:string, company:string, phone:string){
        this.name = name;
        this.company = company;
        this.phone = phone;
    }

    get printInfo(){
        return console.log(this.name +" "+ this.company+ " " + this.phone);
    }
}

let employee1 = new Employee("Đoan", "rikkei","0339533380")

employee1.printInfo