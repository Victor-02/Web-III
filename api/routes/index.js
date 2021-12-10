const rotas = require('./NEDRoutes');
const usuarios = require('./UsuariosRoutes');




module.exports = app => {
    app.use(rotas),
    app.use(usuarios);
}