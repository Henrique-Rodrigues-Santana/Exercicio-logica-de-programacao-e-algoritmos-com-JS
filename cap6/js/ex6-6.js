function verSenha(){
    var inSenha = document.getElementById('inSenha')
    var outResposta = document.getElementById('outResposta')

    var senha = inSenha.value 

    var erros = []

    if(senha.length < 8 || senha.length > 15){
        erros.push('possuir entre 8 e 15 caracteres')
    }

    if(senha.match(/[0-9]/g) == null){
        erros.push('Possuir números (no mínimo, 1)')
    }

    if(!senha.match(/[a-z]/g)){
        erros.push('possuir letras minusculas (no mínimo, 1)')
    }

    if(!senha.match(/[A-Z]/g) || senha.match(/[A-Z]/g).length == 1){
        erros.push('possuir letras maiusculas (no mínimo, 2)')
    }

    if(!senha.match(/[\w_]/g)){
        erros.push('possuir simbolos (no minimo, 1)')
    }

    if(erros.length == 0){
        outResposta.textContent = 'Ok, Senha válida'
    }else{
        outResposta.textContent = 'Erro, A senha deve ' + erros.join(',')
    }

}

var bt = document.getElementById('bt')
bt.addEventListener('click', verSenha)