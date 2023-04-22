var acumulador = ''
var inpNumero = document.getElementById('inpNumero')
var outEstrelas = document.getElementById('outEstrelas')

function fabricarEstrelas(){
    

    var numero = Number(inpNumero.value)
    
    for(var i = 1; i <= numero; i++){
       for(var j = 1;j <= i; j++){
        acumulador += '*'
       }
        acumulador += '\n'
    } 
    
    outEstrelas.textContent = acumulador
    
}

var bt =document.getElementById('bt')
bt.addEventListener('click', fabricarEstrelas)