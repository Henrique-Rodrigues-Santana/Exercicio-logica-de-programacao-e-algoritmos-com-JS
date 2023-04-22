var acumulador = ''

function calclChichilas(){
    var inpNumeroChinchilas = document.getElementById('inpNumeroChinchilas')
    var inpNumeroAnos = document.getElementById('inpNumeroAnos')
    var outResposta = document.getElementById('outResposta')


    var numeroChi = Number(inpNumeroChinchilas.value)
    var anos = Number(inpNumeroAnos.value)

    if(numeroChi == '' || isNaN(numeroChi)){
        alert('Digite um numero de Chinchilas válido')
        inpNumeroChinchilas.focus()
        return
    }else if(anos == '' || isNaN(anos)){
        alert('Digite um numero de anos válido')
        inpNumeroAnos.focus()
        return
    }

    
       
    for(var i = 1; i <= anos; i++ ){
       if(i == 1){
        acumulador = acumulador + i + ' Anos: ' + numeroChi + ' Chinchilas'+'\n'
        
       }else{
        numeroChi = numeroChi * 3
        acumulador = acumulador + i + ' Anos: ' + numeroChi + ' Chinchilas' + '\n'
        
       }
    }

    outResposta.textContent = acumulador

    
}

 bt = document.getElementById('bt')
 bt.addEventListener('click', calclChichilas)