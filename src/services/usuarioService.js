//! aqui onde o cerebro de cada operação funciona os services 
//! nossos services de usuarios deve poder cadastrar, logar, deletar a propria conta, conversar com a IA



import bcrypt from "bcrypt" //? importação do bcrypt biblioteca para criptografar senhas
import {adicionarUsuario} from "../models/usuarioModel.js"


const cadastrarUsuarioService = async (dadosUsuario) => {

    const { nome, email, senha, tema} = dadosUsuario;

    if(!nome){
        throw new Error("o nome é obrigatório")
    } //? verificação para saber se o nome nao esta vazio
    
    if(!email){
        throw new Error("o email é obrigatório")
    } //? verificação para saber se o email não está vazio

    if(!senha || senha.length < 6 ){
        throw new Error("a senha deve ter mais que 6 digitos") 
    } //? verificação para saber se a senha nao esta vazia e se ela tem menos que 6 digitos



    //! criptografia da senha
    const salt = await bcrypt.genSalt(10)
    const senhaHash = await bcrypt.hash(senha, salt)

    const novoUsuario = {
        nome: nome,
        email: email,
        senha: senhaHash,
        temaDeInteresse: tema || null

        } //? cria um novo usuario com a senha encriptada

        const idCriado = await adicionarUsuario(novoUsuario) //? coloca esse novo usuario dentro da função adicionarUsuario la do firestore na pasta model
        return { id: idCriado, mensagem: "Usuário criado com sucesso!" };


}

export {cadastrarUsuarioService} //? exporta esse arquivo atual para o controller poder acessar
