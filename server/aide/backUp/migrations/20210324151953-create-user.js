'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      position: {
        type: Sequelize.INTEGER
      },
      isAdmin: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      isManager: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      isOperator: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      isVisitor: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      isActif: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      idFactory: {
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
    await queryInterface.dropTable('users');
  }
};
