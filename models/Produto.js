const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");



const Produto = sequelize.define("produto", {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    categoria_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    preco: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
      imagem: {
        type: DataTypes.STRING,   // Vai guardar apenas o nome/URL da imagem
        allowNull: true
  }
}, {
    tableName:"Produtos",
    timestamps:false
});

module.exports = Produto;

