const Usuario = require("../model/usuario.model.js");

const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener usuarios" });
  }
};

const obtenerUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) {
      res.status(404).json({ message: "Usuario no encontrado" });
    } else {
      res.status(200).json(usuario);
    }
  } catch (error) {
    res.status(500).json({ error: "Error al obtener usuario" });
  }
};

const crearUsuario = async (req, res) => {
  const { nombre, apellido, correo, password, telefono, direccion, rol } =
    req.body;
  try {
    const nuevoUsuario = await Usuario.create({
      nombre,
      apellido,
      correo,
      password,
      telefono,
      direccion,
      rol,
    });

    res.status(201).json(nuevoUsuario);
  } catch (error) {
    res.status(500).json({ error: "Error al crear usuario" });
  }
};

const actualizarUsuario = async (req, res) => {
  const { nombre, apellido, correo, password, telefono, direccion, rol } =
    req.body;
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    await usuario.update({
      nombre,
      apellido,
      correo,
      password,
      telefono,
      direccion,
      rol,
    });
    res.status(200).json(usuario);
  } catch (error) {
    console.error("Error en actualizarUsuario:", error);
    res.status(500).json({ error: "Error al actualizar usuario" });
  }
};

const eliminarUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    } else {
      await usuario.destroy();
      res.status(204).send();
    }
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar usuario" });
  }
};

const login = async (req, res) => {
  const { correo, password } = req.body;

  try {
    const usuario = await Usuario.findOne({ where: { correo } });

    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    if (usuario.password !== password) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    res.status(200).json({ message: 'Inicio de sesión exitoso', usuario });
  } catch (error) {
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
}

const crearCliente = async (req, res) => {
  const { nombre, apellido, correo, password, telefono, direccion } = req.body;

  try {
    const nuevoCliente = await Usuario.create({
      nombre,
      apellido,
      correo,
      password,
      telefono,
      direccion,
      rol: 'cliente',
    });

    res.status(201).json(nuevoCliente);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear cliente' });
  }
}

const actualizarCorreo = async (req, res) => {
  try {
    const { id } = req.params;
    const { correo } = req.body;

    // Buscar el usuario por id_usuario
    const usuario = await Usuario.findOne({ where: { id_usuario: id } });

    if (!usuario) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    // Actualizar solo el correo
    usuario.correo = correo;
    await usuario.save();

    res.status(200).json({ mensaje: "Correo actualizado correctamente", usuario });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar correo" });
  }
}


module.exports = {
  // Agregar las funciones del controlador aquí
  // obtenerUsuario
  login,
  obtenerUsuarios,
  obtenerUsuario,
  crearUsuario,
  actualizarUsuario,
  eliminarUsuario,
  crearCliente,
  actualizarCorreo
};
