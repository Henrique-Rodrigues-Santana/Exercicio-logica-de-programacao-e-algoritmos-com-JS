
function resposta (){
    var titulo = document.getElementById('inpTitulo').value
    var duracao = Number(document.getElementById('inpDuracao').value) 

    var horas = (duracao / 60).toFixed()
    
    var minutos = (duracao % 60).toFixed()


    document.getElementById('outTitulo').textContent = titulo
    document.getElementById('outDuracao').textContent = horas + ' Horas, e ' + minutos + ' Minutos'

    
}

    var botao = document.getElementById('converter')
    botao.addEventListener('click', resposta)