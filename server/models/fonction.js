'use strict';
const { Model } = require('sequelize');
const Sequelize = require("sequelize");
const calculation = require("../utils/calculation");

module.exports = (sequelize, DataTypes) => {
  class fonction extends Model {
      static associate(models) {
            this.belongsTo(models.measureType, { foreignKey: 'idType', targetKey: 'value', as: 'measureType'})
            this.belongsTo(models.equip, { foreignKey: 'idEquip', as: 'equip'})
            this.belongsTo(models.tankAreaDefEmptying, { foreignKey: 'idAreaSource', as: 'tankAreaDefEmptying'})
            this.belongsTo(models.tankAreaDefFilling, { foreignKey: 'idAreaDest', as: 'tankAreaDefFilling'})
            this.hasMany(models.measure, { foreignKey: 'idFonction', as: 'measurement' })
      }
      toJSON() {
        return { ...this.get(), createdAt: undefined, updatedAt: undefined }
      }
  };
  fonction.init(
      {
                    name: DataTypes.STRING,
                    position: DataTypes.INTEGER,
                    idType: DataTypes.INTEGER,

                    lastCheckDate: DataTypes.DATE,
                    checkBeforeDate: DataTypes.DATE,
                    firstLosses: DataTypes.FLOAT,
                    firstLossesPrice: DataTypes.FLOAT,

                    currentLosses: DataTypes.FLOAT,
                    currentLossesPrice: DataTypes.FLOAT,

                    idAreaSource: DataTypes.STRING,
                    idAreaDest: DataTypes.STRING,
                    freqCheck: DataTypes.INTEGER,
                    freqDelay: DataTypes.INTEGER,
                    nbLosse: DataTypes.INTEGER,
                    maxLosse: DataTypes.INTEGER,

                    haveToBeCheck: DataTypes.BOOLEAN,
                    haveBeenCheck: DataTypes.BOOLEAN,
                    haveToBeValidated: DataTypes.BOOLEAN,
                    modeAutoCheckActif: DataTypes.BOOLEAN,
                    enabled: DataTypes.BOOLEAN,

                    method: DataTypes.STRING,
                    picture1: DataTypes.STRING,
                    picture2: DataTypes.STRING,
                    idProjectLink: DataTypes.INTEGER,
                    idProjectLinkSelected: DataTypes.BOOLEAN,
                    projectPercentRecovery: DataTypes.FLOAT,
                    idEquip: DataTypes.STRING,
                    idEquipIndex: DataTypes.INTEGER,

                    //DataTypes.VIRTUAL
                    alarmLosses: {
                        type: DataTypes.VIRTUAL,
                        get() {
                            return calculation.GetAlarmLosses(this.maxLosse, this.firstLosses, this.currentLosses, this.enabled)
                        }
                    },
                    haveToBeCheckActif: {
                        type: DataTypes.VIRTUAL,
                        get() {
                            return calculation.GetToBeCheckActif( this.haveToBeCheck,  this.lastCheckDate, this.freqCheck, this.modeAutoCheckActif, this.enabled)
                        }
                    },

                    firstAnnualLosses: {
                        type: DataTypes.VIRTUAL,
                        get() {
                            return calculation.GetFirstAnnualLosses(this.nbLosse, this.firstLosses, this.enabled)
                        }
                    },
                    firstAnnualPrice: {
                        type: DataTypes.VIRTUAL,
                        get() {
                            return calculation.GetFirstAnnualPrice(this.nbLosse, this.firstLosses, this.firstLossesPrice, this.enabled)
                        }
                    },
                    currentAnnualLosses: {
                        type: DataTypes.VIRTUAL,
                        get() {
                            return calculation.GetCurrentAnnualLosses(this.nbLosse, this.currentLosses, this.enabled)
                        }
                    },
                    currentAnnualPrice: {
                        type: DataTypes.VIRTUAL,
                        get() {
                            return calculation.GetCurrentAnnualPrice(this.nbLosse, this.currentLosses, this.currentLossesPrice, this.enabled)
                        }
                    },
              },
      {
                    sequelize,
                    modelName: 'fonction'
              }
  );
  return fonction;
};
