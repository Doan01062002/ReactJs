type A ={
    name: string;
    age: number;
    address:object;
};

function validatePerson(a:any):a is A{
    if(typeof(a.name) === "string" && typeof(a.age) === "number" && typeof(a.address) === "object"){
        return true
    }

    return false
}

let student1 = {
    name:"đoan",
    age:21,
    address:{
        country:"VN",
        city:"HN"
    }
}

console.log(validatePerson(student1));