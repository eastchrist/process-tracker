'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tankArea extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  tankArea.init({
    idNode: DataTypes.STRING,
    name: DataTypes.STRING,
    position: DataTypes.INTEGER,
    idArea: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tankArea',
  });
  return tankArea;
};