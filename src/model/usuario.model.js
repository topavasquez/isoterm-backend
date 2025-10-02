const Sequelize = require('sequelize')
const sequelize = require('../database/database.js')

const Usuario = sequelize.define('usuarios', {
    id_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    apellido: {
        type: Sequelize.STRING,
        allowNull: false
    },
    correo: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: true
    },
    telefono: {
        type: Sequelize.STRING,
        allowNull: false
    },
    direccion: {
        type: Sequelize.STRING,
        allowNull: true
    },
}, {
    timestamps: false
})

module.exports = Usuario