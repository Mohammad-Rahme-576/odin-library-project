# odin-library-project
This is a library project designed to manage book information and user interaction. It allows users to:

Add new books to a library collection.
View a list of all books with details.
Remove books from the library.
Change the read status of a book.
Project Structure:
The project uses standard HTML, CSS, and JavaScript files:

index.html: Contains the main user interface structure.
styles.css: Defines the styling for different elements.
script.js: Contains the JavaScript logic for managing the library.
Functionality:
Book Object:

The Book constructor creates a book object with properties like title, author, number of pages, and a read status (true or false).

Adding Books:

The addBookToLibrary function allows users to enter book information through a form. This function creates a new Book object with the provided details and adds it to the myLibrary array.

Displaying Books:

A function iterates through the myLibrary array and displays each book on the page. You can customize the display format (e.g., table or individual cards).

Removing Books:

Each book display has a button that allows users to remove the specific book from the library. This function removes the book object from the myLibrary array and updates the display.

Changing Read Status:

Each book display also has a button to toggle the book's read status. This functionality is implemented through a toggleReadStatus function within the Book prototype. Clicking the button updates the book object's read property and potentially changes the book's display based on the new status.

Data Association:

To associate book information with their corresponding display elements, you can use data attributes. For example, each book element might have a data-index attribute that holds the book's index in the myLibrary array. This allows targeted manipulation of specific books.

Form Submission:

When submitting the new book form, the event.preventDefault() method is used to prevent default form behavior (sending data to a server). This allows us to handle the data submission within the JavaScript code and add the new book to the library.

Getting Started:
Clone or download this project repository.
Open the index.html file in your web browser.