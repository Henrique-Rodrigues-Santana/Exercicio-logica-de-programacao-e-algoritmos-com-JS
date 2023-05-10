var criancas = []

function adicionar(){
    var inNome = document.getElementById('inNome')
    var inIdade = document.getElementById('inIdade')

    var nome = inNome.value 
    var idade = inIdade.value 

    if(nome == '' || idade == '' || isNaN(idade)){
        alert('Digite valores válidos')
        inNome.focus
        return
    }

    criancas.push({nome:nome,idade:idade})

    console.log(criancas.length)
    listar()
}

    var btAdd = document.getElementById('btAdicionar')
    btAdd.addEventListener('click', adicionar)


function listar(){
    if(criancas.length == 0){
        alert('Não há  crianças cadastradas')
        return
    }

    var lista = ''

    for(var i = 0;i<criancas.length;i++){
        lista += criancas[i].nome + ' - ' + criancas[i].idade + '\n'
    }

    document.getElementById('outLista').textContent = lista

}

    var btListar = document.getElementById('btListar')
    btListar.addEventListener('click', listar)

function resumirLista(){
    
    if(criancas.length == 0){
        alert('não há crianças na lista')
        return
    }

    var copia = criancas.slice

    
    copia.sort(function (a, b) { return a.idade - b.idade });


    var resumo = ''
    var aux = copia[0].idade
    var nomes = []

    for(var i = 0; i < copia.length;i++){
        if(copi[i] == aux){
            nomes.push(copia[i].nome)
        }else{
            resumo += aux + ' anos: ' + nomes.length + 'crianças - '
            resumo += (nomes.length / copia.length * 100).toFixed(2) + '%\n'
            resumo += '(' + nomes.join(',') + ' ) \n\n'
            aux = copia[i].idade 
            nomes = []
            nomes.push(copia[i].nome)
        }
    }

    resumo += aux + ' anos: ' + nomes.length + ' crianças - '
    resumo += (nomes.length / copia.length * 100).toFixed(2) + '%\n'
    resumo += '(' + nomes.join(',') + ')\n\n'

    document.getElementById('outLista').textContent = resumo
}

    var btListar = document.getElementById('btFiltro')
    btListar.addEventListener('click', resumirLista )
