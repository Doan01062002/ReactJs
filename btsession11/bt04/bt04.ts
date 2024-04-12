class Vehicle{
    protected name:string
    protected speed:number
    protected id:number

    constructor(name:string, speed:number, id:number){
        this.name = name
        this.speed = speed
        this.id = id
    }

    slowDown(){
        return this.speed--
    }

    speedUp(){
        return this.speed++
    }

    showSpeed(){
        console.log(this.speed);
    }
}

class Bycycle extends Vehicle{
    private gear:number

    constructor(name:string, speed:number, id:number, gear:number){
        super(name,speed,id)
        this.name = name
        this.speed = speed
        this.id = id
        this.gear = gear
    }
}

let bycycle1 = new Bycycle("đoan",50,1,4);

//giảm tốc
bycycle1.slowDown()
bycycle1.showSpeed()

