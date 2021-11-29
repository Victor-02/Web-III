'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Albums', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      cpf: {
        type: Sequelize.STRING
      },
      telefone: {
        type: Sequelize.STRING
      },
      data: {
        type: Sequelize.DATE
      },
      cpf_resp: {
        type: Sequelize.STRING
      },
      nome_resp: {
        type: Sequelize.STRING
      },
      esstado: {
        type: Sequelize.STRING
      },
      cidade: {
        type: Sequelize.STRING
      },
      titulo: {
        type: Sequelize.STRING
      },
      nome_fotografo: {
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
    await queryInterface.dropTable('Albums');
  }
};