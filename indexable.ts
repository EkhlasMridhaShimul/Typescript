interface books {
  [index: number]: string;
}

let myBooks: books = ["book1", "book2"];

console.log(myBooks);

interface BookStore {
  [index: string]: number;
}

let store: BookStore;
store = { book1: 500, book2: 400, book3: 800 };
console.log(store["book2"]);

class MyBook {
  bookName: string;
  constructor(name: string) {
    this.bookName = name;
  }
}

interface MyBookSelf {
  [index: number]: MyBook;
  //indexOf:number;
}

let self2: MyBookSelf;
self2 = [new MyBook("Horror")];
console.log(self2);
