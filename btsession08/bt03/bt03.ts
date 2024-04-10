interface Square{
    type: "square",
    sideLength: number,
}

interface Circle{
    type:"circle";
    radius:number;
}

type shape = Square|Circle

function calculateArea(shape:shape):number{
    if(shape.type === "square"){
        return shape.sideLength**2
    }else{
        return Math.PI*shape.radius**2
    }
}

const square: Square = { type: 'square', sideLength: 5 };
const circle: Circle = { type: 'circle', radius: 3 };

console.log(calculateArea(square));
console.log(calculateArea(circle));