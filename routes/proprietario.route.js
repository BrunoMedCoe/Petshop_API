import express from "express";
import ProprietarioController from "../controllers/proprietario.controller.js";

const router = express.Router();        //criando o roteador para lincar as informações do index para com o controller.

router.post("/", ProprietarioController.createProprietario);
router.get("/", ProprietarioController.getProprietarios);
router.get("/:id", ProprietarioController.getProprietario);
router.delete("/:id", ProprietarioController.deleteProprietario);
router.put("/", ProprietarioController.updateProprietario);

export default router;