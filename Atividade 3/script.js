const inputCep = document.getElementById('cep')
const logradouroText = document.getElementById('logradouro')
const bairroText = document.getElementById('bairro')
const localidadeText = document.getElementById('localidade')
const estadoText = document.getElementById('estado')
const regiaoText = document.getElementById('regiao')
const dddText = document.getElementById('ddd')
const erroText = document.getElementById('erro')
const dadosResultado = document.getElementsByClassName('dados-resultado')[0]

const validaCep = cep => cep.length >= 8

const consultarCep = async () => {
    if (!validaCep(inputCep.value)) {
        dadosResultado.style.display = 'block'
        logradouroText.innerText = ""
        bairroText.innerText = ""
        localidadeText.innerText = ""
        estadoText.innerText = ""
        regiaoText.innerText = ""
        dddText.innerText = ""
        erroText.innerText = "Erro 1: CEP inválido"
    } else {
        try {
            const respose = await fetch(`https://viacep.com.br/ws/${inputCep.value}/json/`)
            const data = await respose.json()
            if (!data.erro) {
                dadosResultado.style.display = 'grid'
                logradouroText.innerHTML = "<strong>Logradouro: </strong>" + data.logradouro
                bairroText.innerHTML = "<strong>Bairro: </strong>" + data.bairro
                localidadeText.innerHTML = "<strong>Localidade: </strong>" + data.localidade
                estadoText.innerHTML = "<strong>Estado: </strong>" + data.estado
                regiaoText.innerHTML = "<strong>Região: </strong>" + data.regiao
                dddText.innerHTML = "<strong>DDD: </strong>" + data.ddd
                erroText.innerText = ""
            } else {
                dadosResultado.style.display = 'block'
                logradouroText.innerText = ""
                bairroText.innerText = ""
                localidadeText.innerText = ""
                estadoText.innerText = ""
                regiaoText.innerText = ""
                dddText.innerText = ""
                erroText.innerText = "Erro 2: CEP não encontrado"
            }
        } catch(error) {
            dadosResultado.style.display = 'block'
            logradouroText.innerText = ""
            bairroText.innerText = ""
            localidadeText.innerText = ""
            estadoText.innerText = ""
            regiaoText.innerText = ""
            dddText.innerText = ""
            erroText.innerText = "Erro 3: CEP não encontrado"
        }
    }

    inputCep.value = ""
}