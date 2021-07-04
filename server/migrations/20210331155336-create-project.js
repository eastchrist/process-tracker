'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
      idStatus: {
        type: Sequelize.INTEGER
      },
      comment: {
        type: Sequelize.STRING
      },
      priority: {
        type: Sequelize.INTEGER
      },
      difficulty: {
        type: Sequelize.INTEGER
      },
      idArea: {
        type: Sequelize.STRING
      },
      hoursPrice: {
        type: Sequelize.FLOAT
      },
      materialPrice: {
        type: Sequelize.FLOAT
      },
      electricalPrice: {
        type: Sequelize.FLOAT
      },
      lastCreationDate: {
        type: Sequelize.DATE
      },
      lastDueDate: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('projects');
  }
};
