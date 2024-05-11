document.addEventListener("DOMContentLoaded", function () {
  //array to store the books
  const myLibrary = [];

  //Book function constructor
  function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  
  //function to add books  to the library
  function addBookToLibrary() {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
    displayBooks(); // Call displayBooks() after adding the book to display them
  }

  //function to display the books as cards(i stored each book in a div )
  function displayBooks() {
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
      const book = myLibrary[i];
      const bookItem = document.createElement("div");
      bookItem.classList.add("book-card");
      let readStatus = "Not Read";
      if (book.read) {
        readStatus = "Read";
      }
      bookItem.innerHTML = `
          <h2>${book.title}</h2>
          <p>Author: ${book.author}</p>
          <p>Pages: ${book.pages}</p>
          <button data-index="${i}" class="toggle-read">${readStatus}</button>
          <button data-index="${i}" class="remove-book">Remove Book</button>
        `;
      bookList.appendChild(bookItem);
    }
  }
  document.getElementById("submit").addEventListener("click", addBookToLibrary);

  //Here we create the button(New Book) to show the form and fill the form
  const addBookButton = document.getElementById("addBook");
  const bookForm = document.getElementById("bookForm");
  addBookButton.addEventListener("click", function () {
    bookForm.hidden = false;
  });

  //Here we add the remove button to remove the book from the display
  const bookList = document.getElementById("bookList");
  bookList.addEventListener("click", function (event) {
    if (event.target.classList.contains("remove-book")) {
      const button = event.target;
      const index = button.dataset.index;
      myLibrary.splice(index, 1);
      displayBooks();
    }
  });

  //Here we add the button to toggle the read status
  bookList.addEventListener("click", function (event) {
    if (event.target.classList.contains("toggle-read")) {
      const button = event.target;
      const index = button.dataset.index;
      myLibrary[index].read = !myLibrary[index].read;

      displayBooks();
    }
  });

  displayBooks();
});
