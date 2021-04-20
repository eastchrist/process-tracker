'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class server extends Model {
    static associate(models) {
      // define association here
    }
  };
  server.init({
    idNode: DataTypes.STRING,
    position: DataTypes.INTEGER,
    name: DataTypes.STRING,
    serverType: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'server',
  });
  return server;
};
