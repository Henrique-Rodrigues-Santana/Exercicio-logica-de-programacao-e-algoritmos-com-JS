
var clientes = [];

var cliente = document.getElementById('inPaciente').value
var out_Clientes = document.getElementById('outClientes')
var out_Atender = document.getElementById('outAtender')
var out_Clientes = document.getElementById('outClientes');


function adicinar (){

    var cliente = document.getElementById('inPaciente').value;
    
    
    if(cliente == ''){
        alert('Preencha o campo corretamente')
        document.getAnimations('inPaciente').focus
        
        return;
    }

    clientes.push(cliente)
    
    var lista = ''
    

    for(var i = 0; i < clientes.length; i++){
        lista += (1+i) + '.' + clientes[i] + '\n'
    }

    out_Clientes.textContent = lista
    

    cliente = ''
    
}

    var bt = document.getElementById('btAdicionar')
    bt.addEventListener('click', adicinar)

function urgencia (){

        var cliente = document.getElementById('inPaciente').value;
        
        
        if(cliente == ''){
            alert('Preencha o campo corretamente')
            document.getAnimations('inPaciente').focus
            
            return;
        }
    
        clientes.unshift(cliente)
        
        var lista = ''
        
    
        for(var i = 0; i < clientes.length; i++){
            lista += (1+i) + '.' + clientes[i] + '\n'
        }
    
        out_Clientes.textContent = lista
        
    
        cliente = ''

}
    
        var bt2 = document.getElementById('btUrgencia')
        bt2.addEventListener('click', urgencia)


function atender (){

            var cliente = document.getElementById('inPaciente').value;
            
            
            if(clientes.length == ''){
                alert('Preencha o campo corretamente')
                document.getAnimations('inPaciente').focus
                
                return;
            }
        
             
             var atendimento = clientes.shift(cliente)   


            var lista = ''
            

        
            for(var i = 0; i < clientes.length; i++){
                lista += (1+i) + '.' + clientes[i] + '\n'

            }


        
            out_Clientes.textContent = lista
            out_Atender.textContent = 'Em atendimento ' + atendimento
            
        
            cliente = ''
            
    }
        
            var bt3 = document.getElementById('btAtender')
            bt3.addEventListener('click', atender)

