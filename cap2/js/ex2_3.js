

function calc (){
    
    var veiculo = document.getElementById('inpVeiculo').value
    var preco = Number(document.getElementById('inpPreco').value) 
    


    var entrada = (preco / 2)

    var parcelas = (entrada / 12).toFixed(2)

    document.getElementById('outProduto').textContent = 'Promoção: ' + veiculo  
    document.getElementById('outEntrada').textContent = 'Entrada de R$: '+ entrada
    document.getElementById('outParcelas').textContent = '+ 12x de R$: ' + parcelas
}




var botao = document.getElementById('btnPromocao')
botao.addEventListener('click', calc )