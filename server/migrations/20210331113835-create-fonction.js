'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('fonctions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      position: {
        type: Sequelize.INTEGER
      },
      idType: {
        type: Sequelize.INTEGER
      },
      idAreaSource: {
        type: Sequelize.STRING
      },
      idAreaDest: {
        type: Sequelize.STRING
      },
      freqCheck: {
        type: Sequelize.INTEGER
      },
      freqDelay: {
        type: Sequelize.INTEGER
      },
      maxLosse: {
        type: Sequelize.INTEGER
      },
      haveToBeCheck: {
        type: Sequelize.BOOLEAN
      },
      haveBeenCheck: {
        type: Sequelize.BOOLEAN
      },
      modeAutoCheckActif: {
        type: Sequelize.BOOLEAN
      },
      picture1: {
        type: Sequelize.STRING
      },
      picture2: {
        type: Sequelize.STRING
      },
      idProjectLink: {
        type: Sequelize.INTEGER
      },
      projectPosition: {
        type: Sequelize.INTEGER
      },
      projectPercentRecovery: {
        type: Sequelize.FLOAT
      },
      idFactory: {
        type: Sequelize.STRING
      },
      idArea: {
        type: Sequelize.STRING
      },
      idPlc: {
        type: Sequelize.STRING
      },
      idEquip: {
        type: Sequelize.STRING
      },
      idEquipIndex: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('fonctions');
  }
};
