'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('areas', {
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
      position: {
        type: Sequelize.INTEGER
      },
      menu: {
        type: Sequelize.STRING
      },
      idFactory: {
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
    await queryInterface.dropTable('areas');
  }
};
