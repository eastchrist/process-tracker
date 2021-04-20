'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class project extends Model {
    static associate(models) {
      this.belongsTo(models.area, { foreignKey: 'idArea', as: 'area'})
    }
  };
  project.init({
    position: DataTypes.INTEGER,
    name: DataTypes.STRING,
    type: DataTypes.INTEGER,
    comment: DataTypes.STRING,
    idOwner: DataTypes.INTEGER,
    priority: DataTypes.INTEGER,
    difficulty: DataTypes.INTEGER,
    idArea: DataTypes.STRING,
    materialPrice: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'project',
  });
  return project;
};
