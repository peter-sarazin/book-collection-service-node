module.exports = service => {
    const authors = require("../controllers/author.controller.js");
  
    // Create a new Author
    service.post("/authors", authors.create);
  
    // Retrieve all Authors
    service.get("/authors", authors.findAll);
  
    // Retrieve an Author by authorId
    service.get("/authors/:authorId", authors.findOne);
  
    // Update an Author by authorId
//    service.put("/authors/:authorId", authors.update);
  
    // Delete an Author by authorId
 //   service.delete("/authors/:authorId", authors.delete);
  };