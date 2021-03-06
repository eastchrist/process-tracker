'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class factory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate( models) {
      // define association here
      //this.hasMany(user, { foreignKey: 'id' })
    }
  };
  factory.init({
    idNode: DataTypes.STRING,
    name: DataTypes.STRING,
    name1: DataTypes.STRING,
    langue: DataTypes.STRING,
    logoClient: DataTypes.STRING,
    logoContractor: DataTypes.STRING,
    currency: DataTypes.STRING,
    currencyEuro: DataTypes.STRING,
    position: DataTypes.INTEGER,
    address: DataTypes.STRING,
    isCartography: DataTypes.BOOLEAN,
    isTraceability: DataTypes.BOOLEAN,
    isOptimisation: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'factory',
  });
  return factory;
};
