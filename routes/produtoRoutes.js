const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();
const produtoController = require("../controllers/produtoController");


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
    cb(null, "uploads/"); // pasta onde as imagens serão salvas
    },
    filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // nome único
    }
});

const upload = multer({ storage });


router.get("/", produtoController.listar);
router.post("/add", produtoController.criar);
router.get("/delete/:id", produtoController.remover);
router.post("/add", upload.single("imagem"), produtoController.criar);




module.exports = router;
