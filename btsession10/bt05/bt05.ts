class Department{
    public readonly id:number;
    private name:string
    private employee:string[];

    constructor(id:number, name:string, employee:string[]){
        this.id = id;
        this.name = name;
        this.employee = employee
    }

    describle():void{
        console.log(this.id);
        console.log(this.name);
    }
}

let department1 = new Department(1,"nhân sự", ["đoan", "hoàng", "dương"]);

department1.describle()