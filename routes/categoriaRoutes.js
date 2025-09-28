const express = require("express");
const router = express.Router();
const categoriaController = require("../controllers/categoriaController");

router.get("/", categoriaController.listar);
router.post("/", categoriaController.criar);
router.get("/delete/:id", categoriaController.remover);

module.exports = router;
