class Vehicle{
    public name:string;
    private company:string;
    private phone:string;
    readonly id:string

    constructor(name:string, company:string, phone:string, id:string){
        this.name = name;
        this.company = company;
        this.phone = phone;
        this.id = id;
    }

    get printInfo(){
        return console.log(this.name +" "+ this.company+ " " + this.phone + " " +this.id);
    }
}

let employee1 = new Vehicle("Đoan", "rikkei","0339533380","1")

//trc khi cập nhật
employee1.printInfo

//sau khi cập nhật
// employee1.id = "2";//báo lỗi không thể gán và khi in ra giá trị của id không thay đổi
employee1.printInfo