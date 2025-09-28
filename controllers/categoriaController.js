const { Categoria } = require("../models/associations");

module.exports = {
    listar: async (req, res) => {
        const categorias = await Categoria.findAll();
        res.render("categorias/index", { categorias });
    },
    criar: async (req, res) => {
        const { nome } = req.body;
        await Categoria.create({ nome });
        res.redirect("/categorias");
    },
    remover: async (req, res) => {
        const { id } = req.params;
        await Categoria.destroy({ where: { id } });
        res.redirect("/categorias");
    }
};
