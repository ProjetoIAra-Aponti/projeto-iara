//! essa pasta é o nosso motor de ignição ela é responsavel apenas por ligar o nosso servifor e fazer tudo rodar
import express from 'express';
import cors from 'cors';

const app = express();

// 1. Configuração do CORS
app.use(cors({
  origin: '*', 
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// 2. Middleware para ler JSON (Obrigatório para o req.body não vir vazio)
app.use(express.json()); 

// 3. Rota de Login alterada para "senha"
app.post('/iara/login', async (req, res) => {
    // Adicionamos esse log para você ver exatamente o que o front enviou no terminal do Docker
    console.log("Dados recebidos no login:", req.body);

    const { email, senha } = req.body; // Alterado de 'password' para 'senha'
    
    if (!email || !senha) {
        return res.status(400).json({ 
            error: "E-mail e senha são obrigatórios",
            recebido: req.body 
        });
    }

    try {
        // --- Sua lógica de login com Firebase Admin SDK aqui ---
        // Exemplo: const user = await admin.auth().getUserByEmail(email);
        
        console.log(`Tentativa de login para: ${email}`);
        
        // Simulação de resposta de sucesso (substitua pela sua lógica real)
        res.status(200).json({
            token: "seu-token-aqui",
            usuario: { nome: "Usuário Teste", id: "123" }
        });

    } catch (error) {
        console.error("Erro no login:", error);
        res.status(500).json({ error: "Erro interno no servidor" });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});