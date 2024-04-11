class Student{
    id:number;
    age:number;
    email:string;

    constructor(id:number, age:number, email:string){
        this.id = id
        this.age = age
        this.email =email
    }

}

let student : Student[] = []

const student1 = new Student(1, 20, "student1@example.com");
const student2 = new Student(2, 22, "student2@example.com");
const student3 = new Student(3, 21, "student3@example.com");

student.push(student1,student2,student3);

student.map((student) => console.log(student)
);