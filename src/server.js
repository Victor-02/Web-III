import path from 'path'

const { application } = require('express');
const express = require('express');

const app = express();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

const PORTA = process.env.PORT ||8080;
app.listen(PORTA, function(){
    console.log('Tudo Certo');
});




app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'pug');

app.use('/publico', express.static(__dirname + '/publico'));
app.use('/bscss', express.static('./node_modules/bootstrap/dist/css'));
app.use('/bsjs', express.static('./node_modules/bootstrap/dist/js'));
app.use('/popperjs', express.static('./node_modules/@popperjs/core/dist/umd'));
app.use('/jquery', express.static('./node_modules/jquery/dist'));

// app.post('/uploadFoto',upload.single('img'),function(req, resp){
//     resp.end();
// });

// app.get('/cadastro', function(req, resp){
//     resp.sendFile(__dirname + '/view/album.html');
// });

require('../api/routes') (app);