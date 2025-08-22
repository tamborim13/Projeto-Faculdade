const express = require("express");
const router = express.Router();
const produtoController = require("../controllers/produtoController");

router.get("/", produtoController.listar);
router.post("/add", produtoController.criar);

module.exports = router;
