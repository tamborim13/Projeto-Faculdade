const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");


const Produto = sequelize.define("Produto", {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    preco: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    categoria:{
      type:DataTypes.STRING,
      allowNull:false
    },
      imagem: {
        type: DataTypes.STRING,   // Vai guardar apenas o nome/URL da imagem
        allowNull: true
  }

});



module.exports = Produto;

