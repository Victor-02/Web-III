const { Router } = require('express');
const express = require('express');
const AlbunsController = require('../controller/AlbunsController');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        //Primeiro parâmetro = erro
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {

        cb(null, file.originalname);
    }
});
const upload = multer({ storage  });

const router = Router();

router.get('/dados', AlbunsController.pegaDados);

router.post('/dados', AlbunsController.criaCadastro);

router.get('/album', function (req, resp) {
    resp.render('album');
});

router.post('/uploadFoto',upload.single('nomeFoto'),function(req, resp){
    resp.end();
});

router.get('/home', function (req, resp) {
    resp.render('contato')
});

router.get('/projetos', function (req, resp) {
    resp.render('Projetos');
});

router.get('/contato', function (req, resp) {
    resp.render('contato');
});

router.get('/equipe', function (req, resp) {
    resp.render('Equipe');
});

router.get('/login', function (req, resp) {
    resp.render('login');
});

router.get('/cadastro', function (req, resp) {
    resp.render('Cadastro');
});

router.get('/relatorio', function (req, resp) {
    resp.render('relatorio')
});

module.exports = router;