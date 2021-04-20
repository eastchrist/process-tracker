'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class equip extends Model {
    static associate(models) {
      this.belongsTo(models.plc, { foreignKey: 'idPlc', as: 'plc'})
    }
  };
  equip.init({
    idNode: DataTypes.STRING,
    name: DataTypes.STRING,
    name1: DataTypes.STRING,
    position: DataTypes.INTEGER,
    menu: DataTypes.STRING,
    idPlc: DataTypes.STRING,
    idEquipDef: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'equip',
  });
  return equip;
};
