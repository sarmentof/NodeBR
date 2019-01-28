/*
    Problema:

    0 - Obter um usuário
    1 - Obter o numero e telefone de um usuário a partir de seu ID
    2 - Obter o endereço do usuário pelo immediate
    
    Hitórico:

    02-promisses: importamos um módulo interno do node.js
*/

// 02-promisses
const util = require('util')

const obterEnderecoAsync = util.promisify(obterEndereco)


function obterUsuario() {
    // quando der algum problema -> reject(ERRO)
    // quando success -> RESOLV
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(() => {
            return resolve({
                id: 1,
                nome: 'Fabiano Sarmento',
                dataNascimento: new Date('Julho, 18 1980 09:50:30')
            })
        }, 1000)
    })
}

function obterTelefone(idUsuario) {
    return new Promise(function resolverPromise(resolve, reject) {
        setTimeout(() => {
            return resolve({
                telefone: '99105-9034',
                ddd: 21
            })
        }, 2000)
    })
}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'Av. dos Mananciais',
            numero: 1501
        })

    }, 2000)
}

const usuarioPromise = obterUsuario()

// para manipular o sucesso, usamos a função .then
// para manipular erros, usamos o .catch
// usuario -> telefone -> telefone
usuarioPromise
    .then(function (usuario) {
        return obterTelefone(usuario.id)
            .then(function resolverTelefone(result) {
                return {
                    usuario: {
                        nome: usuario.nome,
                        id: usuario.id
                    },
                    telefone: result
                }
            })
    })
    .then(function (resultado) {
        const endereco = obterEnderecoAsync(resultado.usuario.id)
        return endereco.then(function resolverEndereco(result) {
            return {
                usuario: resultado.usuario,
                telefone: resultado.telefone,
                endereco: result
            }
        })
    })
    .then(function (resultado) {
        console.log(`
        Nome: ${resultado.usuario.nome}
        Endereço: ${resultado.endereco.rua}, ${resultado.endereco.numero}
        Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}
        `)
    })
    .catch(function (error) {
        console.error('DEU RUIM', error)
    })

