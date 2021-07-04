'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('fonctions', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      position: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      idType: {
        type: Sequelize.INTEGER
      },

      lastCheckDate: {
        type: Sequelize.DATE
      },
      checkBeforeDate: {
        type: Sequelize.DATE
      },

      firstLosses: {
        type: Sequelize.FLOAT
      },
      firstLossesPrice: {
        type: Sequelize.FLOAT
      },
      currentLosses: {
        type: Sequelize.FLOAT
      },
      currentLossesPrice: {
        type: Sequelize.FLOAT
      },
      idAreaSource: {
        type: Sequelize.STRING
      },
      idAreaDest: {
        type: Sequelize.STRING
      },
      freqCheck: { type: Sequelize.INTEGER },
      freqDelay: { type: Sequelize.INTEGER },
      nbLosse: { type: Sequelize.INTEGER },
      maxLosse: { type: Sequelize.INTEGER },

      haveToBeCheck: { type: Sequelize.BOOLEAN },
      haveBeenCheck: { type: Sequelize.BOOLEAN },
      haveToBeValidated: { type: Sequelize.BOOLEAN },

      modeAutoCheckActif: { type: Sequelize.BOOLEAN },
      enabled: { type: Sequelize.BOOLEAN },

      method: {
        type: Sequelize.STRING
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
      idProjectLinkSelected: {
        type: Sequelize.INTEGER
      },
      projectPercentRecovery: {
        type: Sequelize.FLOAT
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
