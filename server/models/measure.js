'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class measure extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //this.belongsTo(models.fonction, { foreignKey: 'idFonction'})
    }
  };
  measure.init({
    idType: DataTypes.INTEGER,
    position: DataTypes.INTEGER,
    comment: DataTypes.STRING,
    losses: DataTypes.FLOAT,
    ts: DataTypes.FLOAT,
    measure1: DataTypes.FLOAT,
    measure2: DataTypes.FLOAT,
    measure3: DataTypes.FLOAT,
    ts1: DataTypes.FLOAT,
    ts2: DataTypes.FLOAT,
    ts3: DataTypes.FLOAT,
    idProduct: DataTypes.STRING,
    idFonction: DataTypes.STRING,
    idTankSource: DataTypes.STRING,
    idTankDest: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'measure',
  });
  return measure;
};
