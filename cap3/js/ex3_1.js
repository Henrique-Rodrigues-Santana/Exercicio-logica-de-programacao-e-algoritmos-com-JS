function calcMedia (){
    var nome = document.getElementById('inNome').value
    var nota1 = Number(document.getElementById('inNota1').value)
    var nota2 = Number(document.getElementById('inNota2').value)
    var outMedia = document.getElementById('outMedia')
    var outSituacao = document.getElementById('outSituacao') 


    var media = (nota1 + nota2)/2

    outMedia.textContent = 'Olá ' + nome + ' Média da nota : ' + media

    if( media >= 7){
        outSituacao.textContent = 'Parabéns, você foi aprovado.'
        outSituacao.style.color = 'blue'
    }else if(media >=4){
        outSituacao.textContent = 'Ops, ' + nome + ', você ainda está em exame'
        outSituacao.style.color = 'green'
    }
    else{
        outSituacao.textContent = 'Pena cara, você foi reprovado'
        outSituacao.style.color = 'red'
    }

}

    var botao = document.getElementById('btResultado')
    botao.addEventListener('click', calcMedia)