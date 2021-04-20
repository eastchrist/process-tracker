'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('measures', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      position: {
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.INTEGER
      },
      comment: {
        type: Sequelize.STRING
      },
      losses: {
        type: Sequelize.FLOAT
      },
      ts: {
        type: Sequelize.FLOAT
      },
      measure1: {
        type: Sequelize.FLOAT
      },
      measure2: {
        type: Sequelize.FLOAT
      },
      measure3: {
        type: Sequelize.FLOAT
      },
      ts1: {
        type: Sequelize.FLOAT
      },
      ts2: {
        type: Sequelize.FLOAT
      },
      ts3: {
        type: Sequelize.FLOAT
      },
      idProduct: {
        type: Sequelize.STRING
      },
      idFonction: {
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
    await queryInterface.dropTable('measures');
  }
};
