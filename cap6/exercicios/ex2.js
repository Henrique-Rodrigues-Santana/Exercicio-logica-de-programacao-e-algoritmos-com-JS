
function gerarCred(){
    var inNome = document.getElementById('inpNome')
    var outBibli = document.getElementById('outBibli')

    var nome = inNome.value
    
    if(nome == ''){
        alert('Digite um nome válido')
        inNome.focus
        return
    }

    var partes = nome.split(' ')
    var sigla = ''
    var tam = partes.length
    console.log(partes[tam])
    

    for(var i = 0; i < tam  - 1; i++){
        sigla += '.'+partes[i].charAt(0)
    }

    var sigla2 = partes[tam - 1] + sigla

    outBibli.textContent = sigla2
     
}

 var bt = document.getElementById('bt')
 bt.addEventListener('click', gerarCred)