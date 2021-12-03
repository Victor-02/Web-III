const { Router } = require('express');
const EstudanteController = require('../controllers/AlbunsController');

const router = Router();

router.get('/dados', AlbunsController.pegaDados);
// router.get('/estudantes/:id', EstudanteController.pegaUmEstudante);
// router.post('/estudantes', EstudanteController.criaEstudante);
// router.put('/estudantes/:id', EstudanteController.atualizaEstudante);
// router.delete('/estudantes/:id', EstudanteController.apagarEstudante);

module.exports = router;