const { Router } = require("express")
const {
    // Agregar funciones exportadas del controlador aquí
    // obtenerUsuario,
    login
} = require('../controller/usuarioController.js')

const router = Router()

// Crear el router

/*
Ejemplo:
router.get('/:id', obtenerUsuario)
*/
router.post('/login', login)


module.exports = router