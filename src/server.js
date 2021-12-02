const { application } = require('express');
const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

const PORTA = process.env.PORT ||8080;
app.listen(PORTA, function(){
    console.log('Tudo Certo');
});

const pool = require('./publico/dao/conexao.js');

app.use('/publico', express.static(__dirname + '/publico'));

app.get('/cadastro', function(req, resp){
    resp.sendFile(__dirname + '/view/album.html');
});

app.get('/home', function(req, resp){
    resp.sendFile(__dirname + '/view/Pagina_inicial.html');
});

app.get('/projetos', function(req, resp){
    resp.sendFile(__dirname + '/view/Projetos.html');
});

app.get('/contato', function(req, resp){
    resp.sendFile(__dirname + '/view/Contato.html');
});

app.get('/equipe', function(req, resp){
    resp.sendFile(__dirname + '/view/Equipe.html');
});

app.post('/home', function(req, resp){
    console.log(`
        req.body.nome = ${req.body.nome}
        req.body.email = ${req.body.email}
        req.body.cpf = ${req.body.cpf} 
        req.body.telefone = ${req.body.telefone}
        req.body.data = ${req.body.data}
        req.body.cpf_resp = ${req.body.cpf_resp}
        req.body.nome_resp = ${req.body.nome_resp}
        req.body.estado = ${req.body.estado}
        req.body.cidade = ${req.body.cidade}
        req.body.titulo = ${req.body.titulo}
        req.body.nome_fotografo = ${req.body.nomef}
        `);

    // pool.query(`INSERT INTO Albums (nome,email,cpf,telefone,data_nascimento, cpf_resp, nome_resp, estado, cidade, titulo_foto, nome_fotografo)
    //             Values
    //             ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)`,
    //             [req.body.nome,                   
    //             req.body.email, 
    //             req.body.cpf, 
    //             req.body.telefone, 
    //             req.body.data, 
    //             req.body.cpf_resp, 
    //             req.body.nome_resp, 
    //             req.body.estado, 
    //             req.body.cidade, 
    //             req.body.titulo, 
    //             req.body.nomef])

    // .then(res=> console.log('Certo'))
    // .catch(err => console.log('Erro: ' + err));

    resp.sendFile(__dirname + '/view/album.html');
});
