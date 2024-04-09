"use strict";
class Book {
    constructor(title, author, price) {
        this.title = title;
        this.author = author;
        this.price = price;
    }
    prinBook() {
        console.log("Thông tín sách");
        console.log(this.title);
        console.log(this.author);
        console.log(this.price);
        console.log("-----------------------");
    }
    updateBook(title, author, price) {
        this.title = title;
        this.author = author;
        this.price = price;
        console.log("đã cập nhập thông tin sách");
    }
}
let book = new Book("Harry Potter", "Rowing", 30);
book.prinBook();
book.updateBook("Doremon", "Nobita", 99);
book.prinBook();
