'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class fonction extends Model {
    static associate(models) {
      this.belongsTo(models.measureType, { foreignKey: 'idType', as: 'measureType'})
      this.belongsTo(models.plc, { foreignKey: 'idPlc', as: 'plc'})
      this.belongsTo(models.equip, { foreignKey: 'idEquip', as: 'equip'})
      this.belongsTo(models.tankAreaDefEmptying, { foreignKey: 'idAreaSource', as: 'tankAreaDefEmptying'})
      this.belongsTo(models.tankAreaDefFilling, { foreignKey: 'idAreaDest', as: 'tankAreaDefFilling'})
    }
  };
  fonction.init({
    name: DataTypes.STRING,
    position: DataTypes.INTEGER,
    idType: DataTypes.INTEGER,
    idAreaSource: DataTypes.STRING,
    idAreaDest: DataTypes.STRING,
    freqCheck: DataTypes.INTEGER,
    freqDelay: DataTypes.INTEGER,
    maxLosse: DataTypes.INTEGER,
    haveToBeCheck: DataTypes.BOOLEAN,
    haveBeenCheck: DataTypes.BOOLEAN,
    modeAutoCheckActif: DataTypes.BOOLEAN,
    picture1: DataTypes.STRING,
    picture2: DataTypes.STRING,
    idProjectLink: DataTypes.INTEGER,
    projectPosition: DataTypes.INTEGER,
    projectPercentRecovery: DataTypes.FLOAT,
    idFactory: DataTypes.STRING,
    idArea: DataTypes.STRING,
    idPlc: DataTypes.STRING,
    idEquip: DataTypes.STRING,
    idEquipIndex: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'fonction',
  });
  return fonction;
};
