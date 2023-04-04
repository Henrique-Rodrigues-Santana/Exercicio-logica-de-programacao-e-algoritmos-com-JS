function parImpar(){
    var numero = Number(document.getElementById('inNumero').value)
    var resposta = document.getElementById('outResposta')
    if(numero == '' || isNaN(numero)){
        alert('Número inválido, digite um número correto')
        document.getElementById('inNumero').focus
        return
    }

    if(numero % 2 == 0){
        resposta.textContent = 'O número digitado é par'
    }else{
        resposta.textContent = 'O número digitado é impar'
    }
}

var botao = document.getElementById('btBotao')
botao.addEventListener('click', parImpar)