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

module.exports = {
    // Agregar las funciones del controlador aquí
    // obtenerUsuario
}