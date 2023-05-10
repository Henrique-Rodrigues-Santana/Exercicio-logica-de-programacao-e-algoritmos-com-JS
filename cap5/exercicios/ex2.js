var lista = []

var inNumero = document.getElementById('inNumero')
var btAdicionar = document.getElementById('btAdicionar')
var btVerificar = document.getElementById('btVerificar')
var outLista = document.getElementById('outLista')
var outAlerte = document.getElementById('outAlerte')

function adicionar(){
    
    var numero = Number(inNumero.value)

    if(numero == ' ' || isNaN(numero)){
        alert('Digite um valor válido "Número" .')
        inNumero.focus
        return
    }

    lista.push(numero)

    listar()


}

    btAdicionar.addEventListener('click', adicionar)

function listar(){

    var listaNaTela = ''

    for(var i = 0; i < lista.length;i++){
        listaNaTela  = lista.join(',') 
    }

    outLista.textContent = 'Números: ' + listaNaTela

    
}   

function verificar(){
 
    var copia = lista.slice()

    

    var ordem = lista.sort((a,b) => a-b)
    
    

    for(var i = 0;i<lista.length;i++){
        
        if(copia[i] == ordem[i]){
        
            outAlerte.textContent = 'Lista numérica em ordem'
            
            
        
        }else{
            
            outAlerte.textContent = 'Lista numérica desordenada'
            break
        }
    }

}

btVerificar.addEventListener('click', verificar)

