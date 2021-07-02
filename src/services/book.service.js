const { Book, Publisher } = require( '../models');  // , Author, BookAuthor



// const { isEmpty } = require('lodash');

// Retrieve all Books from the database.
findAllBooks = async() => {
    try {
        const books = await Book.findAll({ include: [{ model: Publisher, as: 'publisher' }]});
        return books;
    } catch(err) {
        console.log(err);
        return Reject(err);
    }
};

module.exports = { findAllBooks };
