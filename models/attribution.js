'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Attribution extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Attribution.init({
    date: DataTypes.DATE,
    hour: DataTypes.INTEGER,
    customerId: DataTypes.INTEGER,
    computerId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Attribution',
  });
  return Attribution;
};