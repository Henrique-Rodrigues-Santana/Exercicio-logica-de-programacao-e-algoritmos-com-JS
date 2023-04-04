function calc () {
    var inValor = Number(document.getElementById('inValor').value) 
    var out100 = document.getElementById('out100')
    var out50 = document.getElementById('out50')
    var out10 = document.getElementById('out10')


    out10.textContent = ''
    out50.textContent = ''
    out100.textContent = ''

    if(inValor == '' || isNaN(inValor)){
        alert('Favor digitar um numero válido')
        document.getElementById('inValor').focus
        return
    }

    if(inValor % 10 != 0 ){
        alert('Favor digitar um numero divisivel por 10')
        document.getElementById('inValor').focus
        return
    }

    var notasCem = Math.floor(inValor / 100)
    var resto = inValor % 100
    var notasCinquenta = Math.floor(resto / 50)
    resto = resto % 50
    var notasDez = Math.floor(resto / 10)
    console.log(notasCinquenta)
    
    if(notasCem > 0){
        out100.textContent = 'Notas de 100: '+ notasCem
    }
    if(notasCinquenta > 0 ){
        out50.textContent = 'Notas de 50: '+ notasCinquenta
    }
    if(notasDez > 0){
        out10.textContent = 'Notas de 10: '+ notasDez
    }
}

var botao = document.getElementById('btExibir')
botao.addEventListener('click', calc)