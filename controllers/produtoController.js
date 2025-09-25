const Produto = require("../models/Produto");

module.exports = {
    listar: async (req, res) => {
        const produtos = await Produto.findAll();
        res.render("index", { produtos });
    },
    criar: async (req, res) => {
        const { nome, preco, categoria, redirectTo } = req.body;
        let imagem = null

        if (req.file) {
            imagem = req.file.filename; 
    }
        await Produto.create({ nome, preco, imagem, categoria });
        const backURL = req.get('referer');
        res.redirect(backURL || '/');
},

    remover: async (req, res) => {
    const{ id } = req.params; 
    await Produto.destroy({ where: { id } });
    const backURL = req.get('referer'); 
    res.redirect(backURL || '/'); 
    }

};


