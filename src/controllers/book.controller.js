const {Book, Publisher, Author, BookAuthor} = require( '../models');
const bookService = require('../services/book.service.js');

const {isEmpty} = require('lodash');

// Create and Save a new Book
exports.create = async (req, res) => {
  // Validate request
  if (isEmpty(req.body)) {
    return res.status(400).send({
      message: 'missing content.',
    });
  }

  const {publisherId, title, subtitle, isbn_10, isbn_13, edition} = req.body;

  try {
    const book = await Book.create({publisherId, title, subtitle, isbn_10, isbn_13, edition});
    return res.status(201).json(book);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

// Retrieve all Books from the database.
exports.findAllBooks = async (_req, res) => {
  try {
    const books = await bookService.findAllBooks();
    return res.status(200).json(books);
  } catch (err) {
    console.log(err);
    return res.status(500).json( {error: 'Error trying to get all books'});
  }
};

// Retrieve an Book by bookId
exports.findOne = async (req, res) => {
  const bookId = req.params.bookId;

  try {
    const book = await Book.findOne({
      include: [{model: Publisher, as: 'publisher'},
        {
          model: Author,
          as: 'authors',
          required: false,
          attributes: ['author_id', 'first_name', 'middle_name', 'last_name', 'suffix'],
          through: {
            model: BookAuthor,
            as: 'booksAuthors',
            attributes: [],
          },
        }, {all: true, nested: true},
      ],
      where: {bookId},
    });

    if (!book) {
      return res.status(404).json({message: 'There is no book with bookId: ' + bookId});
    } else {
      return res.status(200).json(book);
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({error: 'Error occurred in findOne()'});
  }
};
