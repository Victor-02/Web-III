//Automaticamente ele encontra o arquivo index.js dentro da pasta
const database = require('../models');

/**
 * CRUD
 */
 class AlbunsController {
    //async: espera resolver tudo dentro do método antes do envio da resposta
    static async pegaDados(req, res) {
        try {
            //await: aguarda até receber a resposta do BD
            const Dados = await database.Albuns.findAll();
            return res.status(200).json(Dados);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = EstudanteController