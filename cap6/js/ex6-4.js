function gerarCracha(){
    var inNome = document.getElementById('inNome')
    var outNome = document.getElementById('outNome')


    var nome  = inNome.value 

    if(nome == '' || nome.indexOf(' ') == -1){
        alert('Informe o nome completo do participante')
        inNome.focus
        return
    }

    var priEspaco = nome.indexOf(' ')
    var ultEspaco = nome.lastIndexOf(' ')

    var cracha = nome.substr(0, priEspaco) + nome.substr(ultEspaco)

    outNome.textContent = 'Crachá: ' + cracha

}

    var bt = document.getElementById('bt')
    bt.addEventListener('click', gerarCracha)