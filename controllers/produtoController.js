const { Produto, Categoria } = require("../models/associations");

const produtoController = {
  // Listar produtos com categorias
  listar: async (req, res) => {
    try {
      const produtos = await Produto.findAll({
        include: { model: Categoria, as: "categoria" }
      });

      const categorias = await Categoria.findAll();

      console.log("Categorias carregadas:", categorias.map(c => c.toJSON()));

      console.log("Produtos carregados:", JSON.stringify(produtos, null, 2));

      res.render("index", { produtos, categorias });
   } catch (error) {
      console.error("ERRO NO LISTAR:", error.message);
      console.error(error.stack);
      res.status(500).send("Erro ao carregar produtos");
}

  },

  // Criar novo produto
  criar: async (req, res) => {
    try {
      const { nome, preco, categoriaId } = req.body;
      const imagem = req.file ? req.file.filename : null;

      await Produto.create({ nome, preco, imagem, categoria_id: categoriaId });
      res.redirect("/");
    } catch (error) {
      console.error("ERRO AO CRIAR PRODUTO:", error);
      res.status(500).send("Erro ao criar produto");
    }
  },

  // Remover produto
  remover: async (req, res) => {
    try {
      const { id } = req.params;
      await Produto.destroy({ where: { id } });
      res.redirect("/");
    } catch (error) {
      console.error("ERRO AO REMOVER PRODUTO:", error);
      res.status(500).send("Erro ao remover produto");
    }
  }
};

module.exports = produtoController;
