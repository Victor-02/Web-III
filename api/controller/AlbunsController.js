const database = require('../models');

class AlbunsController {
    static async pegaDados(req, res) {
        try {
            const Dados = await database.Albuns.findAll();
            //return res.status(200).json(Dados);
            res.render('teste', { Dados });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async criaCadastro(req, res) {
        const novoCadastro = req.body;
        console.log(req.body);
        try {
            const novoCadastroCriado = await database.Albuns.create(novoCadastro);
            return res.status(200).json(novoCadastroCriado);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = AlbunsController;