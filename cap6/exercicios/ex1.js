

var inMensagem = document.getElementById('inMensagem')
var outResp = document.getElementById('outResp')

var decrp = ''


function crip(){

    var mensagem = inMensagem.value

    decrp = mensagem

    if(mensagem == ''){
        alert('Digite uma mensagem para criptografar')
        inMensagem.focus
        return
    }

    var menEsquerda = ''
    var menDireita = ''

    for(var i = 0; i  <= mensagem.length;i++){
        if(i  % 2 == 0){
            menEsquerda += mensagem.charAt(i)
        }else{
            menDireita += mensagem.charAt(i)
        }
    }



    var dado = menDireita + menEsquerda

    mensagem = dado

    outResp.textContent = dado
    

}

 var bt = document.getElementById('btCrip')
 bt.addEventListener('click', crip)


function decrip(){

    if(decrp == ''){
        alert('Não há o que decodificar')
        return
    }

    outResp.textContent = decrp

}

var bt2 = document.getElementById('btDesc')
bt2.addEventListener('click', decrip)
