const {Book, Publisher} = require( '../models');


/**
 * Retrieve all Books from the database.
 *
 * @return {Promise}
 */
exports.findAllBooks = async () => {
  try {
    const books = await Book.findAll({include: [{model: Publisher, as: 'publisher'}]});
    return books;
  } catch (err) {
    console.log(err);
    return err;
  }
};

