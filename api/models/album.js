'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Album extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Album.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    cpf: DataTypes.STRING,
    telefone: DataTypes.STRING,
    data: DataTypes.DATE,
    cpf_resp: DataTypes.STRING,
    nome_resp: DataTypes.STRING,
    esstado: DataTypes.STRING,
    cidade: DataTypes.STRING,
    titulo: DataTypes.STRING,
    nome_fotografo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Album',
  });
  return Album;
};