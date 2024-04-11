class Book {
    private title: string;
    private author: string;
    private quantity: number;
  
    constructor(title: string, author: string, quantity: number = 1) {
      this.title = title;
      this.author = author;
      this.quantity = quantity;
    }
  
    getTitle(): string {
      return this.title;
    }
  
    getAuthor(): string {
      return this.author;
    }
  
    getQuantity(): number {
      return this.quantity;
    }
  
    increaseQuantity(): void {
      this.quantity++;
    }
}

class Library {
  private books: Book[];

  constructor() {
    this.books = [];
  }

  addBook(book: Book): void {
    const existingBook = this.books.find((b) => b.getTitle() === book.getTitle() && b.getAuthor() === book.getAuthor());

    if (existingBook) {
      existingBook.increaseQuantity();
    } else {
      this.books.push(book);
    }
  }

  listBooks(): void {
    for (let book of this.books) {
      console.log(
        `Title: ${book.getTitle()}, Author: ${book.getAuthor()}, Quantity: ${book.getQuantity()}`
      );
    }
  }
}

let library = new Library();

let book1 = new Book("Book 1", "Author 1", 2);
let book2 = new Book("Book 2", "Author 2");
let book3 = new Book("Book 3", "Author 3");
let book4 = new Book("Book 4", "Author 4", 3);
let book5 = new Book("Book 1", "Author 1");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);

library.listBooks();