// create a constructor function for the Book object with properties for title, author, and pages.


function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
}


// implement a method within the Book object to display book information.


Book.prototype.displayInfo = function() {
    console.log(`Title:${this.title}, Author: ${this.author}, Pages: ${this.pages}`);
};

// book1.displayInfo()

//create an array to store book objects and implement functions to add new books and search for books by title or author.

let catalog = []

let nextId = catalog.length > 0 ? Math.max(...catalog.map(book => book.id)) + 1:1;

function addBook(title, author, pages){
    const newBook = {id: nextId, title, author, pages};
    catalog.push(newBook);
    nextId++;
}

addBook("Post it Notes", "Elaine Benice", 150)
addBook("Just another Book Title", "Jerry Sandwich", 99)
addBook("Pens.com","Starbucks", 300)
console.log(catalog)

//create functions that utilize the filter method to filter out books that contain more than 100 pages and the map method to add "Title: " and "Author: " to the book's title and author properties respectably.

function filter(catalog){
    let filteredBooks = catalog.filter(book => book.pages < 100);
    return console.log("Filtered Books:", filteredBooks);
} // map method doesn't seem to be needed here because the title and author are being called with the book object. I cannot just call the pages without calling the book object... is asking for a map function an error in the task?

filter(catalog)