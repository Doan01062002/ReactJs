class Shape{
    caculateArea():number{
        return 0;
    }

    calculatePerimeter():number{
        return 0;
    }
}

class Rectangle extends Shape{
    private width: number
    private height: number

    constructor(width: number, height: number){
        super()
        this.width = width
        this.height = height
    }

    caculateArea(): number {
        return this.width*this.height
    }

    calculatePerimeter(): number {
        return (this.width + this.height)*2
    }
}

class Circle extends Shape{
    private radius: number

    constructor(radius: number){
        super()
        this.radius = radius
    }

    caculateArea(): number {
        return Math.PI*(this.radius**2)
    }

    calculatePerimeter(): number {
        return 2*Math.PI*this.radius
    }
}

let rectangle1 = new Rectangle(5,8)
let circle1 = new Circle(6)

console.log("diện tích hình CN: " + rectangle1.caculateArea());
console.log("diện tích hình tròn: " + circle1.caculateArea());

console.log("chu vi hình CN: " + rectangle1.calculatePerimeter());
console.log("chu vi hình tròn: " + circle1.calculatePerimeter());
