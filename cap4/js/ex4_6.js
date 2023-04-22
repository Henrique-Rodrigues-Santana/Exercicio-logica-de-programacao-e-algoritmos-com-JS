function verificarPrimo(){
    var inpNumero = document.getElementById('inpNumero')
    var outResposta = document.getElementById('outResposta')

    var numero = Number(inpNumero.value)

    if(numero == '' || isNaN(numero)){
        alert('Digite um número valido')
        inpNumero.focus()
        return
    }

    var contador = 0

    for(var i = 1; i<= numero; i++){
        if(numero % i == 0){
            contador++
        }
    }

    if(contador == 2){
        outResposta.textContent = 'É um número primo'
    }else{
        outResposta.textContent = 'Não é um numero primo '
    }

}

bt = document.getElementById('bt')
bt.addEventListener('click', verificarPrimo)