function medidor (){
    var veloPerm = Number(document.getElementById('inVeloPermi').value)
    var veloCondu = Number(document.getElementById('inVeloCondu').value)

    if(veloPerm == '' || isNaN(veloPerm)){
        alert('Favor digitar valores corretos')
        document.getElementById('inVeloPermi').focus
        return
    }

    if(veloCondu == '' ||isNaN(veloCondu)){
        alert('Favor digitar valores corretos')
        document.getElementById('inVeloCondu').focus
        return
    }

    var porcentagem = (veloPerm / 100) * 20 + veloPerm

    if(veloCondu <= veloPerm){
        document.getElementById('outSituacao').textContent = 'Situação: Sem multa '
    }else if(veloCondu <= porcentagem){
        document.getElementById('outSituacao').textContent = 'Situação: Multa Leve '
    }else if(veloCondu > porcentagem ){
        document.getElementById('outSituacao').textContent = 'Situação: Multa Alta '
    }
}

var botao = document.getElementById('bt')
botao.addEventListener('click', medidor)