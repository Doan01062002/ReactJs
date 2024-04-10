type Type = number|string

function printType(type:Type):void{
    console.log(type)
}

printType(5);
printType("đoan")

//Union Type chỉ cần thỏa mãn 1 trong 2 điều kiện kiểu dữ liệu

type A ={
    name: string
}

type B ={
    age: number
}

type Intertype = A&B

let obj:Intertype = {
    name:"đoan",
    age:21
}

console.log(obj);

// Intersection type bắt buộc phải tuân thủ theo tất cả kiểu trong intersection