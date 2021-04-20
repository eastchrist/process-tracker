'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate( { factory } ) {
      this.belongsTo(factory, { foreignKey: 'idFactory', as: 'factory'})
    }
    //toJSON() {
    //  return { ...this.get(), password: undefined}
    //}
  };
  user.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    position: DataTypes.INTEGER,
    isAdmin: DataTypes.BOOLEAN,
    isManager: DataTypes.BOOLEAN,
    isOperator: DataTypes.BOOLEAN,
    isVisitor: DataTypes.BOOLEAN,
    isActif: DataTypes.BOOLEAN,
    idFactory: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};
