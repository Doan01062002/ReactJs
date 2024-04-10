interface Person {
    name:string;
    age:number
}

interface Employee extends Person{
    employeeId:string;
}

const employee: Employee = {
    name: "Đoan",
    age: 21,
    employeeId: "12345",
  };
  
  console.log(employee);