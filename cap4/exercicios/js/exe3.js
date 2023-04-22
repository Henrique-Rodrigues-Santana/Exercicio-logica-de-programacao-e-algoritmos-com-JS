var acumulador = 0
var soma = 0




function calcPerfeito () {
    var ipNumero = document.getElementById('ipNumero')
    var outResposta = document.getElementById('outResposta')
    var outVerificar = document.getElementById('outVerificar')

    var numero = Number(ipNumero.value)

    if(numero == '' || isNaN(numero)){
        alert('Digite um número válido')
        ipNumero.focus()
        return
    }

    for(var i = 0; i < numero; i++){
               
        if( numero % i == 0 ){
                acumulador = acumulador + i + ','
                soma =+ soma + i
            }   
        }

        outResposta.textContent = 'Divisores de '+ numero + ' :' + acumulador + '(Soma ' + soma + ')' 

        if(soma == numero){
            outVerificar.textContent = numero + ' É um Número Perfeito'
        }else{
            outVerificar.textContent = numero + ' Não É um Número Perfeito'
        }

        ipNumero.value = ''
        soma = 0
        acumulador = 0


       
}
var bt = document.getElementById('bt')
bt.addEventListener('click', calcPerfeito )