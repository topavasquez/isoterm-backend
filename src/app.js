const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

// Importar los modelos

const User = require('./model/usuario.model.js')
const AireAcondicionado = require('./model/aireAcondicionado.model.js')

// Importar las rutas
/*
Ejemplo: 
const usuariosRoutes = require('./routes/usuarioRoutes.js')
*/

const airesRoutes = require('./routes/aireAcondicionadoRoutes.js')

// Asociaciones entre modelos
/* 
Ejemplo: 
User.belongsToMany(Rol, { as:'rolUser', through: UserRol, foreignKey:'id_usuario' })
Rol.belongsToMany(User, { as:'userRol', through: UserRol, foreignKey:'id_rol' })
*/


// Fin Asociaciones ============================================================================================================

const app = express()

app.use(cors())
app.use(bodyParser.json());
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Exponer las rutas
// Ejemplo
// app.use('/api/usuarios', usuariosRoutes)
app.use('/api/aires', airesRoutes)

app.use((req, res, next) => {
    res.status(404).send('Ruta no encontrada')
})

module.exports = app