const express = require("express");
const app = express();
const produtoRoutes = require("./routes/produtoRoutes");
const sequelize = require("./config/database");
const Produto = require("./models/Produto");

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }))
app.use("/uploads", express.static("uploads"));
app.use("/", produtoRoutes);


sequelize.sync().then(() => {
    console.log("Banco de dados sincronizado!");
    app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
});
