var estrelas = ''
function fabricar(){
    var inNumeroEstrelas = document.getElementById('inNumeroEstrelas')
    var outResposta = document.getElementById('outResposta')

    var numero = Number(inNumeroEstrelas.value)

    if(numero == '' || isNaN(numero)){
        alert('Digite um valor válido')
        inNumeroEstrelas.focus()
        return
    }

    for(var i = 0; i <= numero;i++){
        if(i == numero){
            estrelas = estrelas + '*'
        }else{
            estrelas = estrelas + '*-'
        }
    }

    outResposta.textContent = estrelas
}

bt = document.getElementById('bt')
bt.addEventListener('click', fabricar)