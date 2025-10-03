const { Router } = require("express")
const { 
    getTodosAiresAcondicionados, 
    getAireAcondicionadoPorId,
    crearAireAcondicionado,
    eliminarAireAcondicionadoById,
    actualizarAireAcondicionadoById
} = require('../controller/aireAcondicionadoController.js')

const router = Router()

// Crear el router
// Ejemplo:
// router.get('/:id', obtenerAireAcondicionado)

router.get('/', getTodosAiresAcondicionados)
router.get('/:id', getAireAcondicionadoPorId)
router.post('/', crearAireAcondicionado)
router.delete('/:id', eliminarAireAcondicionadoById)
router.put('/:id', actualizarAireAcondicionadoById)

module.exports = router