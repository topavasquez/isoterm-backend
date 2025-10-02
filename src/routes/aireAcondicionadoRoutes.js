const { Router } = require("express")
const { 
    getTodosAiresAcondicionados, 
    getAireAcondicionadoPorId 
} = require('../controller/aireAcondicionadoController.js')

const router = Router()

// Crear el router
// Ejemplo:
// router.get('/:id', obtenerAireAcondicionado)

router.get('/', getTodosAiresAcondicionados)
router.get('/:id', getAireAcondicionadoPorId)

module.exports = router