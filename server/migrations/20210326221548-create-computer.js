'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('computers', {
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
      isServerMain: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      isServerLocal: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      isComputerLocal: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      isComputerCarto: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      idFactory: {
        type: Sequelize.STRING
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('computers');
  }
};
