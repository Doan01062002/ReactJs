class Vehicle {
    name:string;
    year:number;
    company:string;
    constructor(name:string,year:number,company:string){
        this.name = name;
        this.year = year;
        this.company = company;
    }

    get printName(){
        return this.name
    }

    get printYear(){
        return this.year
    }
}

let vehicle1 = new Vehicle("Sh",90000000,"honda");

console.log(vehicle1.printName);
console.log(vehicle1.printYear);