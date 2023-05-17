function verificar(){
    
    var inpFrase = document.getElementById('inpFrase')
    var frase = inpFrase.value
    var outResposta = document.getElementById('outResposta')
    
    if(frase == ''){
        alert('Digite uma Frase para verificar')
        inpFrase.focus
        return
    }

    var fraseVetor = frase.split('')
    console.log(fraseVetor)
    var tam = fraseVetor.length - 1
    

    var palindromo = ''

    for(var i = tam; i >= 0; i--){
        palindromo += fraseVetor[i]
    }

    console.log(palindromo)

    if(frase == palindromo){
        outResposta.textContent = palindromo + ' é um palidromo'
    }else{
        outResposta.textContent = palindromo + ' não é um palidromo'
    }


}

var bt = document.getElementById('bt')
bt.addEventListener('click', verificar)