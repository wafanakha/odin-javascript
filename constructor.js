function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = () =>
    console.log(
      `${title} by ${author}, ${pages} pages, ${
        read ? "have read" : "not read yet"
      }`
    );
}

const lily = new Book("Mario the idea", "Tonaka Matsunaga", 300, false);
lily.info();

console.log(Object.getPrototypeOf(lily) === Book.prototype);

Book.prototype.infoAuthor = function () {
  console.log("This book written by " + this.author);
};

lily.infoAuthor();
