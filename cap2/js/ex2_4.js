
function calc(){
    var preco = Number(document.getElementById('inPreco').value)
    var consumo = Number(document.getElementById('inConsumo').value)

    var custo = (preco / 1000)*consumo

    document.getElementById('outResposta').textContent = 'Valor a pagar é de R$'+custo
}

var botao = document.getElementById('calc')
botao.addEventListener('click', calc)