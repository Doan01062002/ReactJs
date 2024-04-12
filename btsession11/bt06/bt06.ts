class Product{
    protected name:string
    protected price:number

    constructor(name:string, price:number){
        this.name = name
        this.price = price
    }

    getDescription():void{
        console.log(this.name);
        console.log(this.price);
    }
}

class Electronic extends Product{
    private brand:string

    constructor(name:string, price:number, brand:string){
        super(name,price)
        this.name = name
        this.price = price
        this.brand = brand
    }

    getDescription(): void {
        console.log(this.name);
        console.log(this.price);
        console.log(this.brand);
    }
}

let electronic1 = new Electronic("iphone", 100000000, "apple")

electronic1.getDescription()