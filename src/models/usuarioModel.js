//? nosso primeiro model, basicamente essa pasta é responsavel por jogar tudo pro firestore

import {db} from '../config/firebase.js'


const adicionarUsuario = async(dadosUsuario) => {
    try {
        const usuarioDocRef = await db.collection('usuarios').add({ //? cria uma coleção de dados com o nome de "usuarios"
        nome: dadosUsuario.nome,
        email: dadosUsuario.email,
        senha: dadosUsuario.senha,
        temaDeInteresse: dadosUsuario.temaDeInteresse,
        criadoEm: new Date()
    
    })
    return usuarioDocRef.id //? retorna o Id para quem chamar o adicionarUsuario

    } catch (error) {
        console.error("erro ao salvar os dados" , error)
        throw error;
    } //? cairá na caixa catch se acaso o firebase cair
};

export {adicionarUsuario};




//? codigo base para caso precise reverter
//     { const usuarioRef = await db.collection('usuarios').add({
//     ...dadosUsuario,
//     criadoEm: new Date()

// });
// return usuarioRef.id;
//     }