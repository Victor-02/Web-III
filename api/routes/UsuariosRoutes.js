const { Router } = require('express');
const UsuarioController = require('../controller/UsuarioController');
const auth = require('../middleware/auth');

const router = Router();

router.get('/usuarios', UsuarioController.pegaTodosOsUsuarios);
router.post('/usuarios', UsuarioController.criaUsuario);
router.post('/login', UsuarioController.login);

module.exports = router;