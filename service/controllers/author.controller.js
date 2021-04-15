const { Author } = require( '../models');

const { isEmpty } = require('lodash');

// Create and Save a new Author
exports.create = async(req, res) => {
    // Validate request
    if (isEmpty(req.body)) {
      return res.status(400).send({
        message: "missing content."
      });
    }
  
    const { firstName, middleName, lastName } = req.body;

    try {
        const author = await Author.create({ firstName, middleName, lastName });
        return res.status(201).json(author);
    } catch(err) {
        console.log(err);
        return res.status(500).json(err);
    }
};

// Retrieve all Authors from the database.
exports.findAll = async(req, res) => {
    try {
        const authors = await Author.findAll();
        return res.status(200).json(authors);
    } catch(err) {
        console.log(err);
        return res.status(500).json( { error: 'Error trying to get all authors'});
    }
};
