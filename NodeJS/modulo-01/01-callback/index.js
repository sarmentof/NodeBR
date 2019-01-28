/*
    Problema:

    0 - Obter um usuário
    1 - Obter o numero e telefone de um usuário a partir de seu ID
    2 - Obter o endereço do usuário pelo ID

    Hitórico:

    
*/

function obterUsuario(callback) {
    setTimeout(() => {
        return callback(null, {
            id: 1,
            nome: 'Fabiano Sarmento',
            dataNascimento: new Date()
        })
    }, 1000)
}


function obterTelefone(idUsuario) {
    setTimeout(() => {
        return {
            ddd: 21,
            telefone: '99105-9034'
        }
    }, 2000)
}


function obterEndereco(idUsuario) {
    setTimeout(() => {
        return {
            rua: 'Av. dos Mananciais',
            numero: 1501
        }
    }, 2000);

}


function resolverUsuario(erro, usuario) {
    console.log('usuario', usuario)
}


// chamada para obter usuário
obterUsuario(function resolverUsuario(erro, usuario) {

    // null || "" || 0 === false
    if (erro) {
        console.error('DEU RUIM em USUARIO', erro);
        return;

    }

    obterTelefone
})


// chamada para obter telefone
// const telefone = obterTelefone(usuario.id)

// console.log('telefone', telefone)
