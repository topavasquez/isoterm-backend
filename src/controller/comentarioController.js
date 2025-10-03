const Comentario = require("../model/comentario.model");
const Usuario = require("../model/usuario.model");
const AireAcondicionado = require("../model/aireAcondicionado.model");

// Listar todos los comentarios
const obtenerComentarios = async (req, res) => {
  try {
    const comentarios = await Comentario.findAll({
      include: [
        {
          model: Usuario,
          attributes: ["id_usuario", "nombre", "correo"],
          as: "usuario",
        },
        {
          model: AireAcondicionado,
          attributes: ["id_aire_acondicionado", "modelo"],
          as: "aire",
        },
      ],
    });
    res.json(comentarios);
  } catch (error) {
    console.error("Error al obtener comentarios:", error);
    res.status(500).json({ error: "Error al obtener comentarios" });
  }
};

// Obtener un comentario por id
const obtenerComentario = async (req, res) => {
  try {
    const comentario = await Comentario.findByPk(req.params.id, {
      include: [
        {
          model: Usuario,
          attributes: ["id_usuario", "nombre", "email"],
          as: "usuario",
        },
        {
          model: AireAcondicionado,
          attributes: ["id_aire_acondicionado", "modelo"],
          as: "aire",
        },
      ],
    });
    if (!comentario) {
      return res.status(404).json({ error: "Comentario no encontrado" });
    }
    res.json(comentario);
  } catch (error) {
    console.error("Error al obtener comentario:", error);
    res.status(500).json({ error: "Error al obtener comentario" });
  }
};

// Crear un nuevo comentario
const crearComentario = async (req, res) => {
  const { id_usuario, id_aire_acondicionado, texto } = req.body;
  try {
    const nuevoComentario = await Comentario.create({
      id_usuario,
      id_aire_acondicionado,
      texto,
    });
    res.status(201).json(nuevoComentario);
  } catch (error) {
    console.error("Error al crear comentario:", error);
    res.status(500).json({ error: error.message, stack: error.stack });
  }
};

// Actualizar un comentario existente
const actualizarComentario = async (req, res) => {
  const { texto } = req.body;
  try {
    const comentario = await Comentario.findByPk(req.params.id);
    if (!comentario) {
      return res.status(404).json({ error: "comentario no encontrado" });
    } else {
      comentario.texto = texto;
      await comentario.save();
      res.json(comentario);
    }
  } catch (error) {
    console.error("Error al actualizar comentario:", error);
    res.status(500).json({ error: "Error al actualizar comentario" });
  }
};

module.exports = {
  obtenerComentarios,
  obtenerComentario,
  crearComentario,
  actualizarComentario,
};
