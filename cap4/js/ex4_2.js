function calc (){
    var inNumero = document.getElementById('inNumero')
    var outDecre = document.getElementById('outDecre')

    var numero = Number(inNumero.value)

    if(numero == 0 || isNaN(numero)){
        alert('Digite um número válido')
        inNumero.focus
        return
    }

    var resposta = 'Entre ' + numero + ' e 1: '

    for(var i = numero; i > 0; i--){
        resposta = resposta + i + ' ,'
    }

    outDecre.textContent = resposta
}

var bt = document.getElementById('inBt')
bt.addEventListener('click', calc)