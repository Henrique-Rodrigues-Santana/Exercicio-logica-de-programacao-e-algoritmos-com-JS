function calc (){
    var valor =Number(document.getElementById('inValor').value)
    var tempo 
    var troco
    if(valor == '' || isNaN(valor)){
        alert('Digite um valor válido')
        document.getElementById('inValor').focus
        return
    }

    if(valor < 1.00){
        alert('Valor abaixo do minimo, favor digitar um valor válido')
        document.getElementById('inValor').focus
        return
    }

    if(valor >= 3.00){
        troco = valor - 3
        tempo = 120
    }else if(valor >= 1.75){
        troco = valor - 1.75
        tempo = 60
    }else if(valor >= 1){
        troco = valor - 1
        tempo = 30
    }

    document.getElementById('outTempo').textContent = 'Tempo Contratado: ' + tempo.toFixed()
    document.getElementById('outTroco').textContent = 'Troco R$: '+ troco.toFixed(2)
}

 var botao = document.getElementById('btCalc')
 botao.addEventListener('click', calc)