const express = require("express");
const bodyParser = require("body-parser");

// Importar los modelos

const Usuario = require("./model/usuario.model.js");
const AireAcondicionado = require("./model/aireAcondicionado.model.js");
const Comentario = require("./model/comentario.model.js");

// Importar las rutas
/*
Ejemplo: 
const usuariosRoutes = require('./routes/usuarioRoutes.js')
*/

const airesRoutes = require("./routes/aireAcondicionadoRoutes.js");
const comentariosRoutes = require("./routes/comentarioRoutes.js");
const usuariosRoutes = require("./routes/UsuarioRoutes.js");

// Asociaciones entre modelos
/* 
Ejemplo: 
User.belongsToMany(Rol, { as:'rolUser', through: UserRol, foreignKey:'id_usuario' })
Rol.belongsToMany(User, { as:'userRol', through: UserRol, foreignKey:'id_rol' })
*/

Usuario.hasMany(Comentario, { foreignKey: "id_usuario", as: "comentarios" });
Comentario.belongsTo(Usuario, { foreignKey: "id_usuario", as: "usuario" });

AireAcondicionado.hasMany(Comentario, {
  foreignKey: "id_aire_acondicionado",
  as: "comentarios",
});
Comentario.belongsTo(AireAcondicionado, {
  foreignKey: "id_aire_acondicionado",
  as: "aire",
});

// Fin Asociaciones ============================================================================================================

const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Exponer las rutas
// Ejemplo
// app.use('/api/usuarios', usuariosRoutes)
app.use("/api/aires", airesRoutes);
app.use("/api/comentarios", comentariosRoutes);
app.use("/api/usuarios", usuariosRoutes);

app.use((req, res, next) => {
  res.status(404).send("Ruta no encontrada");
});

module.exports = app;
