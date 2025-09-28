const Produto = require("./Produto");
const Categoria = require("./Categoria");


Categoria.hasMany(Produto, { foreignKey: "categoria_id", as: "produtos" });
Produto.belongsTo(Categoria, { foreignKey: "categoria_id", as: "categoria" });

module.exports = { Produto, Categoria };
