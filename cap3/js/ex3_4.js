function calcHora (){
    var horaBrasil =Number(document.getElementById('inHoraBrasil').value)

    if(horaBrasil == '' || isNaN(horaBrasil) || horaBrasil > 24){
        console.log(horaBrasil)
        alert('Favor colocar um horário válido ')
        document.getElementById('inHoraBrasil').focus()
        return
    }

    var horaFranca = horaBrasil + 5 
    
    if(horaFranca > 24 ){
        horaFranca = horaFranca - 24
    }

    document.getElementById('outHoraFraca').textContent = horaFranca 
}

var botao = document.getElementById('btTransform')
botao.addEventListener('click', calcHora)