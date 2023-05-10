var candidatos = []
var segundaEtapa = []

var inCandidato = document.getElementById('inCandidato')
var inAcertos = document.getElementById('inAcertos')
var btAdicionar = document.getElementById('btAdicionar')
var btListar = document.getElementById('btListar')
var outListar = document.getElementById('outListar')
var btEtapa = document.getElementById('btEtapa')


function adicionar(){

    var alunos = inCandidato.value 
    var acertos = inAcertos.value


        if(alunos == '' || acertos == '' || isNaN(acertos)){
            alert('Digite um valor válido')
            inCandidato.focus
            return
        }

        candidatos.push({alunos:alunos,acertos:acertos})
        

        listar()

}

    btAdicionar.addEventListener('click', adicionar)

function listar(){

    if(candidatos.length == 0){
        alert('Ná há candidatos para listar')
        return
    }

    var exibir = ''

    for(var i = 0; i < candidatos.length; i++){
        exibir += candidatos[i].alunos + ' = ' + candidatos[i].acertos + ' Acertos \n'
    }

    outListar.textContent = exibir

}

    btListar.addEventListener('click', listar)


function filtro(){

    

    if(pontoMedio == '' || isNaN(pontoMedio || candidatos.length == 0 )){
        alert('Digite um valor válido')
        return
    }

    var pontoMedio = Number(prompt('Número de Acertos para Aprovção?'))

    var acumulador = ''

   for(var i = 0; i < candidatos.length; i++ ){
        
    
        var pontoAtual = candidatos[i].acertos
        var alunoAtual = candidatos[i].alunos

        if(pontoAtual >= pontoMedio){
        segundaEtapa.push({aluno:alunoAtual, acerto: pontoAtual})
        acumulador += segundaEtapa[i].aluno + ' = ' + segundaEtapa[i].acerto + ' \n'
        console.log(segundaEtapa[i].aluno)
        }
    
   }

   outListar.textContent = acumulador
    


}

    btEtapa.addEventListener('click', filtro)