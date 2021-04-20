'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('plcs', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      idNode: {
        type: Sequelize.STRING
      },
      position: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      name1: {
        type: Sequelize.STRING
      },
      brand: {
        type: Sequelize.STRING
      },
      connection: {
        type: Sequelize.STRING
      },
      slot: {
        type: Sequelize.STRING
      },
      rack: {
        type: Sequelize.STRING
      },
      ip: {
        type: Sequelize.STRING
      },
      idServer: {
        type: Sequelize.STRING
      },
      idArea: {
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
    await queryInterface.dropTable('plcs');
  }
};
