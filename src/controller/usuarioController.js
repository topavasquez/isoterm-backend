const Usuario = require('../model/usuario.model.js')

/* 
Ejemplo:

const obtenerUsuario = async (req, res) =>{
    try {
        const usuario = await User.findByPk(req.params.id)
        if(!usuario){
            res.status(404).json({ message: 'Usuario no encontrado' })
        } else {
            res.status(200).json(usuario) 
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener usuario' })
    }
}
*/

const login = async (req, res) => {
    const { correo, password } = req.body;

    try {
        const usuario = await Usuario.findOne({ where: { correo } });

        if (!usuario) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        if (usuario.password !== password) {
            return res.status(401).json({ message: 'Contraseña incorrecta' });
        }

        res.status(200).json({ message: 'Inicio de sesión exitoso', usuario });
    } catch (error) {
        res.status(500).json({ error: 'Error al iniciar sesión' });
    }
}

module.exports = {
    // Agregar las funciones del controlador aquí
    // obtenerUsuario
    login
}