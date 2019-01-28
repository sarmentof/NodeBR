/*
  Exemplo usando a função map em comparação com a função forEach
*/

const service = require('./service')

Array.prototype.meuMap = function (callback) {
  const novoArrayMapeado = []
  for (let indice = 0; indice <= this.length - 1; indice++) {
    const resultado = callback(this[indice], indice)
    novoArrayMapeado.push(resultado)

  }

  return novoArrayMapeado
}

async function main() {
  try {
    const results = await service.obterPessoas('a')


    /*
     Teste para mostrar diferença com ForEach
    */

    // const names = []

    // results.results.forEach(function (item) {
    //   names.push(item.name)
    // });

    /*
      Teste para mostrar diferença com "map"
    */

    // const names = results.results.map(function (pessoa) {
    //   return pessoa.name;
    // })

    /*
      Exemplo usando arrow function para encurtar o código
    */

    // const names = results.results.map((pessoa) => pessoa.name)


    /*
      Exemplo usando Array meuMap
    */

    const names = results.results.meuMap(function (pessoa, indice) {
      // return pessoa.name
      return `[${indice}]${pessoa.name}`
    })
    console.log('names', names)

  } catch (error) {
    console.error('DEU RUIM', error)
  }
}

main()