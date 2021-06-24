'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Book, {
        through: 'BookAuthor',
        as: 'books',
        foreignKey: 'authorId',
        otherKey: 'bookId'
      });
    }
  }
  Author.init({
    authorId: {
      field: 'author_id',
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: {
      field: 'first_name',
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    middleName: {
      field: 'middle_name',
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    lastName: {
      field: 'last_name',
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    suffix: {
       type: DataTypes.STRING(25),
      allowNull: true,
    },  }, {
    sequelize,
    tableName: 'authors',
    modelName: 'Author',
  });
  return Author;
};