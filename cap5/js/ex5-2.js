var inNumero = document.getElementById('inNumero')
var numerosTentados = []



function aposta(){

    

    var numero = Number(inNumero.value)

    if(numero == '' || isNaN(numero)){
        alert('Digite um número válido')
        inNumero.focus()
        return
    }



    if(numerosTentados.indexOf(numero) == -1){
        numerosTentados.push(numero)
        
    }else{
        alert('Número já digitado')
        inNumero.focus()
        return
    }

    var numAposta = Math.random() * 100

    document.getElementById('outErro').textContent = 'Erros: ' + numerosTentados.length
    document.getElementById('outErro').textContent = 'Erros: ' + numerosTentados.length +' (' + numerosTentados.join(',')+ ')'

    if(numerosTentados.length == 6){
        alert('Suas Chances Acabaram')
        document.getElementById('outErro').textContent = 'Erros: '
        numerosTentados = []
        tentativas = 6
        return
    }

    if(numero == numAposta){
        document.getElementById('outDicas').textContent = 'Você acertou'
        numerosTentados = []
        tentativas = 6
        return

    }else{
        var dica = numero < numAposta ? 'Tente um numero maior que ' + numero : 'Tente um numero menor que ' + numero
        document.getElementById('outDicas').textContent = dica
    }

    



   
    
}

var bt = document.getElementById('bt')
bt.addEventListener('click', aposta)