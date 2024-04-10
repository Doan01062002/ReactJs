function obj(obj1:object, obj2:object):object{
    return {...obj1, ...obj2}
}

type Person ={
    name: string;
    age: number;
}

type Address ={
    city: string;
    country: string;
}

const person: Person = { name: "John", age: 25 };
const address: Address = { city: "New York", country: "USA" };

console.log(obj(person,address));