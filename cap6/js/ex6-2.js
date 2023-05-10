function mostraDica(){
    var inFruta = document.getElementById('inFruta')
    var outDica = document.getElementById('outDica')

    var fruta = inFruta.value.toUpperCase()

    if(fruta == ''){
        alert('Informe a Fruta')
        inFruta.focus
        return
    }

    var resposta = fruta.charAt(0)
    var estrela = '*'
    var tam = fruta.length 

    for(var i = 1; i < tam; i++){
        if(fruta.charAt(i) == fruta.charAt(0)){
            resposta += fruta.charAt(i)
        }else{
            resposta += '_'
        }

        estrela +='*'
    }

    outDica.textContent = resposta
    inFruta.value = estrela
}

var bt = document.getElementById('bt')
    bt.addEventListener('click', mostraDica)