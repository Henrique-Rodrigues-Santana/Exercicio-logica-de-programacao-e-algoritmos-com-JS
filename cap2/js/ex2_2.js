
function resposta (){
    var titulo = document.getElementById('inpTitulo').value
    var duracao =Number(document.getElementById('inpDuracao').value) 

    document.getElementById('outTitulo').textContent = titulo

    
}

    var botao = document.getElementById('converter')
    botao.addEventListener('click', resposta)