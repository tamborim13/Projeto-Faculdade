const { DataTypes } = require("sequelize");
const db = require("../config/database");

const Categoria = db.define("Categoria", {
    categoria_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
        
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: "categoria",
    timestamps: false
});

module.exports = Categoria;
