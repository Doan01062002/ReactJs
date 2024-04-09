class Book{
    title:string;
    author:string;
    price:number;

    constructor(title:string, author:string, price:number){
        this.title = title;
        this.author = author;
        this.price = price;
    }

    prinBook():void{
        console.log("Thông tín sách")
        console.log(this.title)
        console.log(this.author)
        console.log(this.price)
        console.log("-----------------------")
    }

    updateBook(title:string, author:string, price:number):void{
        this.title = title;
        this.author = author;
        this.price = price;
        console.log("đã cập nhập thông tin sách")
    }
}

let book: Book = new Book("Harry Potter", "Rowing", 30);

book.prinBook()

book.updateBook("Doremon", "Nobita", 99);

book.prinBook();