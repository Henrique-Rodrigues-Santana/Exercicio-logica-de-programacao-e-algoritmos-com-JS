function calc (){
    var inNumero = document.getElementById('inNumero')
    var outResposta = document.getElementById('outResposta')

    var numero = Number(inNumero.value)

    if(numero == '' || isNaN(numero)){
        alert('Favor digitar um numero válido')
        inNumero.focus
        return
    }

    var resposta = ' '

    for(var i = 1; i <=10; i++){
        resposta = resposta + numero + ' X ' + i + ' = ' + numero * i + '\n' 
    }

    outResposta.textContent = resposta
}

    var bt = document.getElementById('btTabuada')

    bt.addEventListener('click', calc)