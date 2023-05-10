

var noticias = []



var inNoticias = document.getElementById('inNoticia')
var btAdicionar = document.getElementById('btAdicionar')
var outNoticias = document.getElementById('outNoticias')
var nNoticiasC = document.getElementById('outNoticiasCadastradas')
var btListar = document.getElementById('btListar')

function adicionar(){
   
   
    var noticia = inNoticias.value 

    if(noticia == ''){
        alert('Digite uma nótícia válida')
        inNoticias.focus
        return
    }

    noticias.push(noticia)

    var contador = noticias.length

    nNoticiasC.textContent = 'Noticias Cadastradas: ' + contador

   
}

    btAdicionar.addEventListener('click', adicionar)

function listar(){

    
    if(noticias.length == 0){
        alert('Não há noticias cadastradas')
        return    
    }

    var solicitar = Number(prompt('Quantas noticias deseja visualizar?'))

    if(solicitar > noticias.length){
        alert('Não temos tantas noticias, tente novamente')
        return
    }

   var lista = ''
   var tamanhoLista = noticias.length - 1

   for(var i = tamanhoLista; i >= solicitar; i--){

    lista += (i+1) + '° )' + noticias[i] + '\n'

   }

   outNoticias.textContent = lista
   


}

btListar.addEventListener('click', listar)

