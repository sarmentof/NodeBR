/* 
    Exemplos de uso dos tipos de For: For/ForIn/ForOf

    Usamos o console.time e console.timeEnd para marcar o tempo de execução de cada "For"

*/

const service = require('./service')

async function main() {
    try {
        const result = await service.obterPessoas('a')
        const names = []

        // Exemplo usando for

        console.time('for')
        for (let i = 0; i <= result.results.length - 1; i++) {
            const pessoa = result.results[i]
            names.push(pessoa.name)
        }
        console.timeEnd('for')

        // Exemplo usando forin 

        console.time('forin')
        for (let i in result.results) {
            const pessoa = result.results[i]
            names.push(pessoa.name)
        }
        console.timeEnd('forin')

        // Exemplo usando forof

        console.time('forof')
        for (pessoa of result.results) {
            names.push(pessoa.name)
        }
        console.timeEnd('forof')

        console.log(`names`, names)
    } catch (error) {
        console.error(`erro interno`, error)
    }
}

main()