function calc (){

    var produto = document.getElementById('inMedicamento').value
    var preco = document.getElementById('inPreco').value

    var precoPomocao = Math.floor(preco * 2)
    
    document.getElementById('outProduto').textContent = 'Promoção de ' + produto
    document.getElementById('outPromocao').textContent = 'Leve dois por apenas R$:' + precoPomocao.toFixed(2)

}

var calcular = document.getElementById('calcular')
calcular.addEventListener('click',calc)