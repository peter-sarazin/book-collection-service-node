'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Publisher, Author }) {
      // define association here
      this.belongsTo(Publisher, { foreignKey: 'publisherId', as: 'publisher' });
      this.belongsToMany(Author, {
        through: 'BookAuthor',
        as: 'authors',
        foreignKey: 'bookId',
        otherKey: 'authorId'
      });
    }

    toJSON() {
      return { ...this.get(), publisherId: undefined };
    }
  }
  Book.init({
    bookId: {
      field: 'book_id',
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    publisherId: {
      field: 'publisher_id',
      type: DataTypes.INTEGER,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    subtitle: DataTypes.STRING(45),
    isbn10: {
      field: 'isbn_10',
      type: DataTypes.STRING(10)
    },
    isbn13: {
      field: 'isbn_13',
      type: DataTypes.STRING(13)
    },
    edition: DataTypes.INTEGER
  }, {
    sequelize,
    tableName: 'books',
    modelName: 'Book',
  });
  return Book;
};