const database = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class UsuarioController {

    static async pegaTodosOsUsuarios(req, res) {
        try {
            const todosOsUsuarios = await database.Usuarios.findAll();
            return res.status(200).json(todosOsUsuarios);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    // static async gerarSenhaHash(senha) {
    //     const custoHash = 12;
    //     return bcrypt.hash(senha, custoHash);
    // }

    static async criaUsuario(req, res) {
        try {
            const { email, senha } = req.body;
            const user = await UsuarioController.pegaUmUsuarioPorEmail(email);
            const senhaHash = await bcrypt.hash(senha, 12);
            delete user.senha;
            user["senhaHash"] = senhaHash;
            const novoUsuarioCriado = await database.Usuarios.create(user);
            return res.status(200).json(novoUsuarioCriado);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async pegaUmUsuarioPorEmail(email) {
        try {
            const usuario = await database.Usuarios.findOne({
                where: {
                    email: email
                }
            });
            return usuario;
        } catch (error) {
            throw error;
        }
    }

    static verificaUsuario(usuario) {
        if (!usuario) {
            throw new Error("Usuário não encontrado");
        }
    }

    static async verificaSenha(senha, senhaHash) {
        const senhaValida = await bcrypt.compare(senha, senhaHash);
        if (!senhaValida)
            throw new Error("Senha inválida!");
    }

    static async login(req, res) {
        const { email } = req.body;
        const { senha } = req.body;
        try {
            const usuario = await UsuarioController.pegaUmUsuarioPorEmail(email);
            UsuarioController.verificaUsuario(usuario);
            await UsuarioController.verificaSenha(senha, usuario.senha_hash);
            const token = jwt.sign({ id: usuario.id }, process.env.CHAVE_JWT, { expiresIn: '15m' });
            res.set('Authorization', token);
            return res.status(200).json(usuario);
        } catch (error) {
            return res.status(401).json(error.message);
        }
    }

}

// try {
//     const { email, password, name1, name2 } = req.body;

//     const user = await pool.query("SELECT * FROM userr WHERE email = $1", [email]);

//     if (user.rows.length !== 0) {
//         return res.status(401).send("user already exists"); // this works
//     }

//     const bcryptPassword = await bcrypt.hash(password, 10);
//     const newUser = await pool.query(
//         "INSERT INTO userr (lastName, firstName, email, passwrd) VALUES ($1, $2, $3, $4) RETURNING *",
//         [name1, name2, email, bcryptPassword]
//     );

//     res.json(newUser.rows[0]);
// } catch (err) {
//     console.error(err.message);
//     res.status(500).send("server error");
// }
// });

module.exports = UsuarioController