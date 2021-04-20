'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('equips', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      idNode: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      name1: {
        type: Sequelize.STRING
      },
      position: {
        type: Sequelize.INTEGER
      },
      menu: {
        type: Sequelize.STRING
      },
      idPlc: {
        type: Sequelize.STRING
      },
      idEquipDef: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('equips');
  }
};
