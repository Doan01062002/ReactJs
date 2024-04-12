class Parent{
    private name: string
    protected height:number

    constructor(name:string, height:number){
        this.name = name
        this.height = height
    }

    printInfor():void{
        console.log(this.name);
        
        console.log(this.height);
    }

}

class Children extends Parent{

    constructor(name:string, height:number){
        super(name,height)
    }

    printInforChild(): void {
        // console.log(this.name);//lỗi biên dịch
        console.log(this.height);
    }
}