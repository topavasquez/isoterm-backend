const { Router } = require("express")
const { 
    getTodosAiresAcondicionados, 
    getAireAcondicionadoPorId,
    crearAireAcondicionado,
    eliminarAireAcondicionadoById
} = require('../controller/aireAcondicionadoController.js')

const router = Router()

// Crear el router
// Ejemplo:
// router.get('/:id', obtenerAireAcondicionado)

router.get('/', getTodosAiresAcondicionados)
router.get('/:id', getAireAcondicionadoPorId)
router.post('/crear-aire', crearAireAcondicionado)
router.delete('/:id', eliminarAireAcondicionadoById)

module.exports = router