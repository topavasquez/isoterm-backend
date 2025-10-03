const Sequelize = require("sequelize");
const sequelize = require("../database/database.js");

const AireAcondicionado = sequelize.define(
  "aires_acondicionados",
  {
    id_aire_acondicionado: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    marca: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    modelo: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    alcance: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    wifi: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    btu: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    precio: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    stock: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    imagen: {
      type: Sequelize.STRING,
      allowNull: true,
    },
     disponible: { 
      type: Sequelize.BOOLEAN, 
      allowNull: false, 
      defaultValue: true }
  },
  {
    timestamps: false,
  }
);

module.exports = AireAcondicionado;
