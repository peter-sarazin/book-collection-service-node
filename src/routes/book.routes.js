module.exports = service => {
    const books = require("../controllers/book.controller.js");
  
    // Create a new Book
    service.post("/books", books.create);
  
    // Retrieve all Books
    service.get("/books", books.findAllBooks);
  
    // Retrieve an Book by bookId
    service.get("/books/:bookId", books.findOne);
  
    // Update an Book by bookId
//    service.put("/books/:bookId", books.update);
  
    // Delete an Book by bookId
//    service.delete("/books/:bookId", books.delete);
  };