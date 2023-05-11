var criptograf = []
var descripto = []

var inMensagem = document.getElementById('inMensagem')
var outResp = document.getElementById('outResp')



function crip(){

    var mensagem = inMensagem.value 

    if(mensagem == ''){
        alert('Digite uma mensagem para criptografar')
        inMensagem.focus
        return
    }

    var menEsquerda = ''
    var menDireita = ''
    

    for(var i = 0; i < mensagem.lenth;i++){
        if(mensagem.charAt(i) % 2 == 0){
            menDireita += mensagem.charAt(i)
        }else{
            menEsquerda += mensagem.charAt(i)
        }
    }

    console.log(menDireita + menEsquerda)



}