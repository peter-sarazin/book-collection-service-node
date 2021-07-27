const {Author, Book, BookAuthor} = require( '../models');

const {isEmpty} = require('lodash');

// Create and Save a new Author
exports.create = async (req, res) => {
  // Validate request
  if (isEmpty(req.body)) {
    return res.status(400).send({
      message: 'missing content.',
    });
  }

  const {firstName, middleName, lastName, suffix} = req.body;

  try {
    const author = await Author.create({firstName, middleName, lastName, suffix});
    return res.status(201).json(author);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

// Retrieve all Authors from the database.
exports.findAll = async (req, res) => {
  try {
    const authors = await Author.findAll();
    return res.status(200).json(authors);
  } catch (err) {
    console.log(err);
    return res.status(500).json( {error: 'Error trying to get all authors'});
  }
};

// Retrieve an Author by authorId
exports.findOne = async (req, res) => {
  const authorId = req.params.authorId;

  try {
    const author = await Author.findOne({
      include: [{
        model: Book,
        as: 'books',
        required: false,
        attributes: ['bookId', 'title', 'subtitle', 'isbn10', 'isbn13', 'edition'],
        through: {
          model: BookAuthor,
          as: 'booksAuthors',
          attributes: [],
        },

      }],
      where: {authorId},
    });

    if (!author) {
      return res.status(404).json({message: 'There is no author with authorId: ' + authorId});
    } else {
      return res.status(200).json(author);
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({error: 'Error occurred in findOne()'});
  }
};
