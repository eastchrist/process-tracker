'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('digitals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      name1: {
        type: Sequelize.STRING
      },
      tag: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      position: {
        type: Sequelize.INTEGER
      },
      idEquip: {
        type: Sequelize.STRING
      },
      idTank: {
        type: Sequelize.STRING
      },
      indexCreation: {
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
    await queryInterface.dropTable('digitals');
  }
};
