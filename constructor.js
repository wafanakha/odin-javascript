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
function Article(title) {
  this.title = title;
}
Object.setPrototypeOf(Article.prototype, Book.prototype);
const lily = new Book("Mario the idea", "Tonaka Matsunaga", 300, false);
lily.info();

const caveStory = new Article("The Cave Story");
caveStory.author = "James Miller";
caveStory.pages = 140;
caveStory.read = true;

Book.prototype.infoAuthor = function () {
  console.log("This book written by " + this.author);
};
caveStory.infoAuthor();
lily.infoAuthor();
