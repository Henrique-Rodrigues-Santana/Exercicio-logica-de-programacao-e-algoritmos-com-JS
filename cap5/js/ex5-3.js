var carros = []



function adicionar(){



    var inModelo = document.getElementById('inModelo')
    var inPreco = document.getElementById('inPreco')

    var modelo = inModelo.value
    var preco = Number(inPreco.value)

    
    if(modelo == '' || preco == '' || isNaN(preco)){
        alert('Adicione um valor válido')
        inModelo.focus()
        return
    }

    carros.push({modelo:modelo, preco: preco})

    inModelo.value = ''
    inPreco.value = ''
    inModelo.focus

    listarCarros()

}

    var btbtAdicionar = document.getElementById('btAdicionar')
    btbtAdicionar.addEventListener('click', adicionar)
    

function listarCarros (){

    if(carros.length == 0){
        alert('Não há carros para listar')
        return
    }

    var lista = ''

    for(var i = 0;i <carros.length; i++){
        lista += carros[i].modelo + ' R$ ' + carros[i].preco.toFixed() + '\n'
    }

    document.getElementById('outLista').textContent = lista

    
}

    var btListar = document.getElementById('btListar')
    btListar.addEventListener('click', listarCarros)


function filtrarCarros(){

    var maximo = Number(prompt('Qual o valor máximo que o cliente deseja pagar?'))

    if(maximo == '' || isNaN(maximo)){
        alert('Valor inválido')
        return
    }

    var lista = ''

    for(var i = 0; i < carros.length; i++){
        if(carros[i].preco <= maximo){
            lista += carros[i].modelo + 'R$' + carros[i].preco.toFixed(2) + '\n'
        }
    }

    var outLista = document.getElementById('outLista')

    if(lista == ''){
        outLista.textContent = 'Não há carros com preço até '+ maximo.toFixed(2)
    }else{
        outLista.textContent = 'Carros até R$ ' + maximo.toFixed(2) + '\n ------------------------------' + lista
    }

}

    var btFiltro = document.getElementById('btFiltrar')
    btFiltro.addEventListener('click', filtrarCarros)