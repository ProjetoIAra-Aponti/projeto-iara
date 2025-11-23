import {db} from '../config/firebase.js'


const adicionarUsuario = async(dadosUsuario) => {
    try {
        const usuarioDocRef = await db.collection('usuarios').add({
        nome: dadosUsuario.nome,
        email: dadosUsuario.email,
        senha: dadosUsuario.senha,
        temaDeInteresse: dadosUsuario.tema,
        criadoEm: new Date()
    
    })
    return usuarioDocRef

    } catch (error) {
        console.error("erro ao salvar os dados" , error)
        throw error;
    }
};

export {adicionarUsuario};




//? codigo base para caso precise reverter
//     { const usuarioRef = await db.collection('usuarios').add({
//     ...dadosUsuario,
//     criadoEm: new Date()

// });
// return usuarioRef.id;
//     }