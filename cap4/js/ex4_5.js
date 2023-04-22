var numContas = 0
var valTotal = 0

var resposta = ''

function registrarConta(){
    var inDescricao = document.getElementById('inDescricao')
    var inValor = document.getElementById('inValor')
    var outListaContas = document.getElementById('outListaContas')
    var outTotal = document.getElementById('outTotal')

    var descricao = inDescricao.value
    var valor = Number(inValor.value)

    if(descricao == '' || valor == '' || isNaN(valor)){
        alert('Digite um valor Válido')
        document.getElementById('inDescricao').focus
        return
    }

    numContas++
    valTotal = valTotal + valor

    resposta = resposta + descricao + ' -R$: ' + valor.toFixed(2) + ' \n' 

    outListaContas.textContent = resposta + '-------------------------------------'

    outTotal.textContent = numContas + 'Conta(s) - Total R$'+ valTotal.toFixed(2)

    inDescricao = ''
    inValor = ''
    document.getElementById('inDescricao').focus

}

    var tb = document.getElementById('btRegistrar')
        tb.addEventListener('click', registrarConta)