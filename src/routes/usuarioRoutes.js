import express from 'express';
import { cadastrarUsuarioController, loginUsuarioController } from '../controllers/usuarioController.js';



const router = express.Router();

router.post("/cadastro", cadastrarUsuarioController); //? criação de um endpoint para a funcionalidade de cadastro
router.post("/login", loginUsuarioController)

export default router;