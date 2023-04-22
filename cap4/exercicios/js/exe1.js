var acumulador = ' '

function contador(){
    var inpFrutas = document.getElementById('inpFrutas')
    var inpQuantidade = document.getElementById('inpQuantidade')
    var OutResposta = document.getElementById('OutResposta')

    var quantidade = Number(inpQuantidade.value)
    var frutas = inpFrutas.value

    if(quantidade == '' || isNaN(quantidade) ){
        alert('Digite um valor válido')
        inpQuantidade.focus()
        return
    }

    for(var i = 1; i<=quantidade;i++){
        if(i == quantidade){
            acumulador = acumulador + frutas
        }else{
            acumulador = acumulador + frutas + '*'
        }
    }

    OutResposta.textContent = acumulador

}

    bt = document.getElementById('bt')
    bt.addEventListener('click', contador)