const { Router } = require("express");
const {
  // Agregar funciones exportadas del controlador aquí
  // obtenerUsuario,
  login,
  obtenerUsuarios,
  obtenerUsuario,
  crearUsuario,
  actualizarUsuario,
  eliminarUsuario,
  crearCliente,
  actualizarCorreo,
  obtenerVendedores
} = require("../controller/usuarioController.js");


const router = Router();

router.get("/", obtenerUsuarios);
router.get('/vendedores/', obtenerVendedores); // Mover esta ruta antes de la dinámica
router.get("/:id", obtenerUsuario);
router.post("/", crearUsuario);
router.put("/:id", actualizarUsuario);
router.delete("/:id", eliminarUsuario);
router.post('/login', login)
router.patch('/:id/correo', actualizarCorreo);

router.post('/cliente', crearCliente);

module.exports = router