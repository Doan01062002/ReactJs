class Circle{
    private radius:number

    constructor(radius:number){
        this.radius = radius
    }

    S():number{
       return 2*Math.PI*this.radius**2
    }

    P():number{
       return 2*Math.PI*this.radius
    }
}

let circle = new Circle(4)

console.log(circle.S());
console.log(circle.P());

