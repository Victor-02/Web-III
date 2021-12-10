'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Usuarios',
      [{
        nome: 'Teste 2',
        email: "teste2@gmail.com",
        senha: "teste2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // {
      //   nome: 'Zé dos Santos',
      //   email: "ze@gmail.com",
      //   data_nascimento: "1980-08-25",
      //   cpf: "5555555",
      //   telefone: "4444",
      //   estado: "casa",
      //   cidade: "sads",
      //   titulo: "adasd",
      //   nome_fotografo:  "asdsa",
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // }
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
