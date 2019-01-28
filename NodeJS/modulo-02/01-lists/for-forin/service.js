// Serviço de acesso a API Swapi usando Axios
const axios = require('axios')
const URL = `https://swapi.co/api/people`

async function obterPessoas(nome) {
    const url = `${URL}/?search=${nome}&format=json`
    const response = await axios.get(url)
    return response.data
}

// Consulta para testar funcionamento do axios

// obterPessoas('r2')
//     .then(function (resultado) {
//         console.log('resultado', resultado) 
//     })
//     .catch(function (error) {
//         console.error('DEU RUIM', error)
//     })

module.exports = {
    obterPessoas
}