'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Publisher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Book }) {
      // define association here
      this.hasMany(Book, { foreignKey: 'publisherId' });
    }
  };
  Publisher.init({
    publisherId: {
      field: 'publisher_id',
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    url: DataTypes.STRING(125),
  }, {
    sequelize,
    tableName: 'publishers',
    modelName: 'Publisher',
  });
  return Publisher;
};