var clubes = []

function adicionar(){
    
    var in_times = document.getElementById('inTimes') 
    
    var time = in_times.value 

    if(time == ''){
        alert('Digite algum time válido')
        in_times.focus
        return
    }

    clubes.push(time)

    in_times = ''
    

    listar()

    

}

    var btAdd = document.getElementById('btAdicionar')
    btAdd.addEventListener('click', adicionar)

function listar(){

    if(clubes.length == 0){
        alert('Lista vazia')
        return
    }

    var lista = ''


    for(var i = 0;i < clubes.length;i++){
        
        lista += (i+1) + '. ' + clubes[i] + '\n'
    }

    document.getElementById('outListar').textContent = lista
    


}

    var btListar = document.getElementById('btListar')
    btListar.addEventListener('click', listar)


function montarJogos(){

    if(clubes.length == 0 || clubes.length % 2 != 0){
        alert('Lista de times vazia ou incompleta')
        return
    }


    var acumulador = ''
    

    for(var i = 0; i < clubes.length ; i++ ){
        
        
        var time1 = clubes.shift() 
        var time2 = clubes.pop()
        acumulador += time1 + ' x ' + time2 + '\n'
        if(clubes.length == 2){
            acumulador += clubes[0] + ' X ' + clubes[1]
        }
        

    } 

    
    document.getElementById('outListar').textContent = acumulador 

}

    var btjogos = document.getElementById('btTabela')
    btjogos.addEventListener('click', montarJogos)