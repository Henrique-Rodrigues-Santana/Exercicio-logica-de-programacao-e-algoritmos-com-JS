function calc(){
    var numero = Number(document.getElementById('inNumero').value)
    var resposta = document.getElementById('outMostrar')

    if(numero == '' || isNaN(numero)){
        alert('Digite um numero válido')
        document.getElementById('inNumero').focus
        return
    }

   var raiz = Math.sqrt(numero) 

   if(raiz == Math.floor(raiz)){
    resposta.textContent = 'Raiz: ' + raiz
   }else{
    resposta.textContent = 'Não há raiz exata para '+ raiz
   }
}

var botao = document.getElementById('resposta')
botao.addEventListener('click', calc)