/*
    Problema:

    0 - Obter um usuário
    1 - Obter o numero e telefone de um usuário a partir de seu ID
    2 - Obter o endereço do usuário pelo immediate

    Hitórico:

    02-promisses: importamos um módulo interno do node.js
    03-callbackToPromisses: refatoramos o código de Callback para Promisses
    04-promissesAsyncAwait: resolução de promises com Async/Await
    05-eventEmitt: simulando um click com "EventEmitt"
*/


const EventEmitter = require('events')

class MeuEmissor extends EventEmitter {

}

const meuEmissor = new MeuEmissor()
const nomeEvento = 'usuario:click'

meuEmissor.on(nomeEvento, function (click) {
    console.log('um usuário clicou', click)
})

meuEmissor.emit(nomeEvento, 'na barra de rolagem')
meuEmissor.emit(nomeEvento, 'no ok')

// simula evento de click e adiciona contador (ficou infinito)
let count = 0
setInterval(() => {
    meuEmissor.emit(nomeEvento, 'no ok' + ' ' + (count++))
}, 1000);


// adiciona um "escutador" para tudo que o usuário digitar no terminal

const stdin = process.openStdin()
stdin.addListener('data', function (value) {
    console.log(`Você digitou: ${value.toString().trim()}`)
})


/*
* *** ATENÇÃO ***
 ===> não fazer uso do stdin com Promise, pois o objetivo da Promise é executar uma única vez  <===
*/

// const stdin = process.openStdin()

// function main() {
//     return new Promise(function (resolve, reject) {
//         stdin.addListener('data', function (value) {
//             // console.log(`Você digitou: ${value.toString().trim()}`)
//             return resolve(value)
//         })
//     })
// }
// main().then(function (resultado) {
//     console.log('resultado', resultado.toString())
// })