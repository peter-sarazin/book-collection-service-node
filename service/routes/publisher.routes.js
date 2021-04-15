module.exports = service => {
    const publishers = require("../controllers/publisher.controller.js");
  
    // Create a new Publisher
    service.post("/publishers", publishers.create);
  
    // Retrieve all Publishers
    service.get("/publishers", publishers.findAll);
  
    // Retrieve a single Publisher with publisherId
//    service.get("/publishers/:publisherId", publishers.findOne);
  
    // Update a Publisher with publisherId
//    service.put("/publishers/:publisherId", publishers.update);
  
    // Delete a Publisher with publisherId
 //   service.delete("/publishers/:publisherId", publishers.delete);
  };