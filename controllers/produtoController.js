const Produto = require("../models/Produto");

module.exports = {
    listar: async (req, res) => {
        const produtos = await Produto.findAll();
        res.render("index", { produtos });
    },
    criar: async (req, res) => {
        const { nome, preco } = req.body;
        let imagem = null

        if (req.file) {
            imagem = req.file.filename; 
    }
        await Produto.create({ nome, preco, imagem });
        res.redirect("/");
},

    remover: async (req, res) => {
    const{ id } = req.params; 
    await Produto.destroy({ where: { id } }); 
    res.redirect("/"); 
    }

};


