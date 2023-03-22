

function mostrar(){

    var nome = document.getElementById("nome").value
    
    document.getElementById("resposta").textContent = 'Olá '+ nome


}

    var botao = document.getElementById("exibir")
    botao.addEventListener("click", mostrar)