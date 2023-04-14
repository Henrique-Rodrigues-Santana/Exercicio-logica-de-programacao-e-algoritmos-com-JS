function verificaTiangulo(){

    var ladoA = Number(document.getElementById('inpLadoA').value)
    var ladoB = Number(document.getElementById('inpLadoB').value)
    var ladoC = Number(document.getElementById('inpLadoC').value)
    

    if(ladoA == '' || isNaN(ladoA)){
        alert('Valor Invalido, favor preencher corretamente com números')
        document.getElementById('inpLadoA').focus
        return
    }else if(ladoB == '' || isNaN(ladoB)){
        alert('Valor Invalido, favor preencher corretamente com números')
        document.getElementById('inpLadoB').focus
        return
    }else if(ladoC == '' || isNaN(ladoC)){
        alert('Valor Invalido, favor preencher corretamente com números')
        document.getElementById('inpLadoC').focus
        return
    }

    if(ladoA > (ladoB + ladoC) || ladoB > (ladoA + ladoC) || ladoC > (ladoB + ladoA)){
        document.getElementById('outVerifica').textContent = 'A medida dos lados não permitem a criação de um triângulo'
    }else{
        document.getElementById('outVerifica').textContent = 'A medida dos lados podem formar um triângulo'
    }

    if(ladoA == ladoB && ladoB == ladoC){
        document.getElementById('outTipo').textContent = 'Tipo: Equilátero'
    }else if(ladoA == ladoB || ladoA == ladoC || ladoB == ladoC){
        document.getElementById('outTipo').textContent = 'Tipo: Isósceles'
    }else if(ladoA != ladoB && ladoB != ladoC && ladoC != ladoA){
        document.getElementById('outTipo').textContent = 'Tipo: Escaleno'
    }

}

    var bt = document.getElementById('bt')
    bt.addEventListener('click', verificaTiangulo)
