    function calcularPeso(){
        var inNome = document.getElementById('inNome')
        var rbMasculino = document.getElementById('rbMasculino')
        var rbFeminino = document.getElementById('rbFeminino')
        var inAltura = document.getElementById('inpAltura')
        var outResposta = document.getElementById('outResposta')

      var  nome = inNome.value
      var  altura = Number(inAltura.value) 
      var  masculino = rbMasculino.checked
      var  feminino = rbFeminino.checked 
      


        if(nome == '' || (masculino == false && feminino == false)){
            alert('Por favor, informe o nome e o sexo corretamente')
            inNome.focus()
            return
        }

        if(altura == 0 || isNaN(altura)){
            alert('Por favor, digite uma alura válida')
            inAltura.focus()
            return
        }

        if(masculino){
            var peso = 22 * Math.pow(altura,2)

        }else{
            var peso = 21 * Math.pow(altura,2)
        }

        outResposta.textContent = 'Olá '+ nome + ', seu peso ideal é de ' + peso.toFixed(2) + ' KG'


    }

    var botao = document.getElementById('btCalcular')
    botao.addEventListener('click', calcularPeso)

    function limpar(){
        document.getElementById('inNome').value = ''
        document.getElementById('rbMasculino').checked = false
        document.getElementById('rbFeminino').checked = false
        document.getElementById('inpAltura').value = ''
        document.getElementById('outResposta').textContent = ''
        document.getElementById('inName').focus
    }

    var btLimpar = document.getElementById('btLimpar')
    btLimpar.addEventListener('click', limpar)