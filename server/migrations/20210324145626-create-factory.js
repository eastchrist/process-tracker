'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('factories', {
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
      langue: {
        type: Sequelize.STRING
      },
      logoClient: {
        type: Sequelize.STRING
      },
      logoContractor: {
        type: Sequelize.STRING
      },
      currency: {
        type: Sequelize.STRING
      },
      currencyEuro: {
        type: Sequelize.STRING
      },
      position: {
        type: Sequelize.INTEGER
      },
      address: {
        type: Sequelize.STRING
      },
      isCartography: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      isTraceability: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      isOptimisation: {
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
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('factories');
  }
};
