'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Albums',
    [{
      nome: req.body.nome,
      email: req.body.email,
      cpf: req.body.cpf,
      telefone: req.body.telefone,
      data_nascimento: req.body.data,
      cpf_resp: req.body.cpf_resp,
      nome_resp: req.body.nome_resp,
      estado: req.body.estado,
      cidade: req.body.cidade,
      titulo: req.body.titulo,
      nome_fotografo: req.body.nomef

    }])
    .then(res=> console.log('deu certo'))
    .catch(err => console.log('Erro: ' + err));
  }
    
   //down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  //}
};
