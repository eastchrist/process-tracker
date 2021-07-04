'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class project extends Model {
    static associate(models) {
      this.belongsTo(models.projectType, { foreignKey: 'idType', targetKey: 'value', as: 'projectType'})
      this.belongsTo(models.projectStatus, { foreignKey: 'idStatus', targetKey: 'value', as: 'projectStatus'})
      this.belongsTo(models.area, { foreignKey: 'idArea', as: 'area'})
      this.hasMany(models.fonction, { foreignKey: 'idProjectLink', as: 'fonctionsLinked' })
      this.hasMany(models.projectAction, { foreignKey: 'idProject', as: 'projectAction' })
    }
  };
  project.init({
    position: DataTypes.INTEGER,
    name: DataTypes.STRING,
    idType: DataTypes.INTEGER,
    idStatus: DataTypes.INTEGER,
    comment: DataTypes.STRING,
    priority: DataTypes.INTEGER,
    difficulty: DataTypes.INTEGER,
    idArea: DataTypes.STRING,
    hoursPrice: DataTypes.FLOAT,
    materialPrice: DataTypes.FLOAT,
    electricalPrice: DataTypes.FLOAT,
    lastCreationDate: DataTypes.DATE,
    lastDueDate: DataTypes.DATE,
    payback: {
      type: DataTypes.VIRTUAL,
      get() {
        return "TOTO"
      }
    },

  }, {
    sequelize,
    modelName: 'project',
  });
  return project;
};
