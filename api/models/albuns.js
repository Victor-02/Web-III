'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Albuns extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Albuns.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    cpf: DataTypes.STRING,
    telefone: DataTypes.STRING,
    data_nascimento: DataTypes.DATE,
    cpf_resp: DataTypes.STRING,
    nome_resp: DataTypes.STRING,
    estado: DataTypes.STRING,
    cidade: DataTypes.STRING,
    titulo: DataTypes.STRING,
    nome_fotografo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Albuns',
  });
  return Albuns;
};