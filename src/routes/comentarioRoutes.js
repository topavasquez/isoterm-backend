const express = require("express");
const router = express.Router();
const comentarioController = require("../controller/comentarioController");

// Rutas para comentarios
router.get("/", comentarioController.obtenerComentarios);
router.get("/:id", comentarioController.obtenerComentario);
router.post("/", comentarioController.crearComentario);
router.put("/:id", comentarioController.actualizarComentario);
router.delete("/:id", comentarioController.eliminarComentario);

// Agregar la ruta para eliminar un comentario

module.exports = router;
