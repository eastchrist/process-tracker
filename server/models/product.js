'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    static associate( { factory } ) {
      this.belongsTo(factory, { foreignKey: 'idFactory', as: 'factory'})
    }
  };
  product.init({
    name: DataTypes.STRING,
    position: DataTypes.INTEGER,
    totalSolid: DataTypes.FLOAT,
    price: DataTypes.FLOAT,
    idFactory: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};
