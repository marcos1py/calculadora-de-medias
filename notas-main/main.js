const form = document.getElementById("form-atividade");
let linhas = ""
const imgAprovado =  "<img src='./images/aprovado.png'/>"
const imgReprovado =  "<img src='./images/reprovado.png'/>"
const atividade = []
const notas =[]
const spanaprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanreprovado = '<span class="resultado reprovado">Reprovado</span>'


form.addEventListener("submit", function(e){
    e.preventDefault() 
    adicionalinha()
    atualiza_tabela ()
    atualizaMediaFinal ()
})

function adicionalinha () {
        // seleciona os elementos de entrada de formulário com os IDs "nome-atividade" e "nota-atividade"
        const inputNomeAtividade = document.getElementById("nome-atividade")
        const inputNotaAtividade = document.getElementById("nota-atividade")

        if (atividade.includes(inputNomeAtividade.value)){
            alert("atividade ja foi inserida")
        }
        else {
            atividade.push(inputNomeAtividade.value)
            notas.push(parseFloat(inputNotaAtividade.value))
    
            // cria uma string de linha de tabela HTML usando os valores dos elementos de entrada
            
            let linha = "<tr>"
            linha += `<td>${inputNomeAtividade.value}</td>`
            linha += `<td>${inputNotaAtividade.value}</td>`
            linha += `<td>${inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado}</td>`
            linha += "</tr>"
        
            linhas += linha
        
            inputNotaAtividade.value = ''
            inputNotaAtividade.value = ''
        }
}

function atualiza_tabela () {
    const corpoTabela = document.querySelector("tbody")
    corpoTabela.innerHTML = linhas
}

function atualizaMediaFinal () {
    const mediafinal = calcula_media_final()

    document.getElementById("media-final-valor").innerHTML = mediafinal.toFixed(2)
    document.getElementById("media-final-resultado").innerHTML = mediafinal >= 7 ? spanaprovado: spanreprovado
}

function calcula_media_final (){
    let somadasnotas = 0
    for (let i = 0 ; i < notas.length; i++){
        somadasnotas += notas[i]
    }
    const media = somadasnotas/ notas.length

    return media
}