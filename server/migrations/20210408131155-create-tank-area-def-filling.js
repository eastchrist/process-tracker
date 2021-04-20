'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tankAreaDefFillings', {
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
      dataComment: {
        type: Sequelize.STRING
      },
      dataType: {
        type: Sequelize.STRING
      },
      options: {
        type: Sequelize.STRING(4000)
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
    await queryInterface.dropTable('tankAreaDefFillings');
  }
};
