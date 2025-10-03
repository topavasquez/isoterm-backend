const Sequelize = require("sequelize");
const sequelize = require("../database/database.js");

const Comentario = sequelize.define(
  "comentarios",
  {
    id_comentario: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    id_usuario: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    id_aire_acondicionado: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    texto: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    fecha: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
  },
  {
    timestamps: false,
  }
);
module.exports = Comentario;
