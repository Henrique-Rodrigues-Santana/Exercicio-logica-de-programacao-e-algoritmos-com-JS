function email(){
    var inNome = document.getElementById('inNome')
    var outEmail = document.getElementById('outEmail')

    var nome = inNome.value 

    if(nome == '' || nome.indexOf(' ') == -1){
        alert('Digite um nome completo')
        inNome.focus 
        return
    }

    var parte = nome.split(' ')
    var email = ''
    var tam = parte.length 

    for(var i = 0; i < tam - 1; i++){
        email += parte[i].charAt(0) 
    }

    email += parte[tam - 1] + '@empresa.com.br'

    outEmail.textContent = 'Email: ' + email.toLowerCase()
}

var bt = document.getElementById('bt')
bt.addEventListener('click', email)