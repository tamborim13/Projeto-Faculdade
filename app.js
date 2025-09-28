const express = require("express");
const app = express();
const produtoRoutes = require("./routes/produtoRoutes");
const sequelize = require("./config/database");
const Produto = require("./models/Produto");
const categoriaRoutes = require("./routes/categoriaRoutes");

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }))
app.use("/uploads", express.static("uploads"));
app.use("/", produtoRoutes);
app.use(express.static("public"))
app.use("/", categoriaRoutes);

app.get("/pages", async (req, res) => {
    try {
        const produtos = await Produto.findAll(); // busca todos os produtos
        res.render("pages/page", { produtos });   // passa para o EJS
    } catch (err) {
        console.error(err);
        res.send("Erro ao carregar produtos");
    }
});


sequelize.sync().then(() => {
    console.log("Banco de dados sincronizado!");
    app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
});



