class Book {
    private title: string;
    private author: string;
  
    constructor(title: string, author: string) {
      this.title = title;
      this.author = author;
    }
  
    getTitle(): string {
      return this.title;
    }
  
    getAuthor(): string {
      return this.author;
    }
}
  
class Library {
  private books: Book[];

  constructor() {
    this.books = [];
  }

  addBook(book: Book): void {
    this.books.push(book);
  }

  listBooks(): void {
    for (let book of this.books) {
      console.log(`Title: ${book.getTitle()}, Author: ${book.getAuthor()}`);
    }
  }
}

let library = new Library();

let book1 = new Book("Book 1", "Author 1");
let book2 = new Book("Book 2", "Author 2");
let book3 = new Book("Book 3", "Author 3");
let book4 = new Book("Book 4", "Author 4");
let book5 = new Book("Book 5", "Author 5");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);

library.listBooks();