'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class area extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  area.init({
    idNode: DataTypes.STRING,
    name: DataTypes.STRING,
    position: DataTypes.INTEGER,
    menu: DataTypes.STRING,
    idFactory: DataTypes.STRING,
    idArea: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'area',
  });
  return area;
};
