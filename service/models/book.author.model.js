'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BookAuthor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // eslint-disable-next-line no-unused-vars
    static associate({ models }) {
      // define association here
    }
  }
  BookAuthor.init({
    bookId: {
      field: 'book_id',
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    authorId: {
      field: 'author_id',
      type: DataTypes.INTEGER,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'books_authors',
    modelName: 'BookAuthor',
  });
  return BookAuthor;
};