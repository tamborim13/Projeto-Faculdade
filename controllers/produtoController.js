const Produto = require("../models/Produto");

module.exports = {
    listar: async (req, res) => {
        const produtos = await Produto.findAll();
        res.render("index", { produtos });
    },
    criar: async (req, res) => {
        const { nome, preco } = req.body;
        await Produto.create({ nome, preco });
        res.redirect("/");
    }
};

