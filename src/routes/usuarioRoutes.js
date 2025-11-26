import express from 'express';
import { cadastrarUsuarioController } from '../controllers/usuarioController.js';



const router = express.Router();

router.post('/cadastro', cadastrarUsuarioController); //? criação de um endpoint para a funcionalidade de cadastro

export default router;