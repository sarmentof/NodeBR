/*
    Problema:

    0 - Obter um usuário
    1 - Obter o numero e telefone de um usuário a partir de seu ID
    2 - Obter o endereço do usuário pelo immediate

    Hitórico:

    02-promisses: importamos um módulo interno do node.js
    03-callbackToPromisses: refatoramos o código de Callback para Promisses
    04-promissesAsyncAwait: resolução de promises com Async/Await
*/


const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)


function obterUsuario() {
    // quando der algum problema -> reject(ERRO)
    // quando sucess -> RESOLV
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

// 1º passo: adicionar a palavra async -> automaticamente ela retornará uma Promise
main()
async function main() {
    try {
        console.time('medida-promise')
        const usuario = await obterUsuario()
        // const telefone = await obterTelefone(usuario.id)
        // const endereco = await obterEnderecoAsync(usuario.id)

        // Promise.all é usado para as Promises que não dependem de uma outra Promise
        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEnderecoAsync(usuario.id)
        ])
        const endereco = resultado[1]
        const telefone = resultado[0]
        console.log(`
            Nome: ${usuario.nome},
            Endereço: ${endereco.rua}, ${endereco.numero}
            Telefone: (${telefone.ddd}) ${telefone.telefone}
        `)
        console.timeEnd('medida-promise')
    }
    catch {
        console.error('DEU RUIM', error)
    }
}
