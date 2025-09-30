const { Router } = require("express")
const {
    // Agregar funciones exportadas del controlador aquí
    // obtenerUsuario,
} = require('../controller/usuarioController.js')

const router = Router()

// Crear el router

/*
Ejemplo:
router.get('/:id', obtenerUsuario)
*/


module.exports = router