const { Router } = require("express")
const { 
    getTodosAiresAcondicionados, 
    getAireAcondicionadoPorId,
    crearAireAcondicionado,
    eliminarAireAcondicionadoById,
    actualizarEstadoAireAcondicionado,
    actualizarStockAireAcondicionado
} = require('../controller/aireAcondicionadoController.js')

const router = Router()

// Crear el router
// Ejemplo:
// router.get('/:id', obtenerAireAcondicionado)

router.get('/', getTodosAiresAcondicionados)
router.get('/:id', getAireAcondicionadoPorId)
router.post('/crear-aire', crearAireAcondicionado)
router.delete('/:id', eliminarAireAcondicionadoById)
router.patch('/:id/estado', actualizarEstadoAireAcondicionado)
router.patch('/:id/stock', actualizarStockAireAcondicionado)


module.exports = router