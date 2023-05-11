const TAXA_MULTA = 2 /100
const TAXA_JUROS = 0.33/100

function calcularMultaJuros(){
    var inDataVenci = document.getElementById('inDataVenci')
    var inValor = document.getElementById('inValor')
    var outMulta = document.getElementById('outMulta')
    var outJuros = document.getElementById('outJuros')
    var outTotal = document.getElementById9('outTotal')


    var dateVenc = inDataVenci.value 

    var valor = Number(inValor.value)

    if(dateVenc == '' || valor == 0 || isNaN(valor)){
        alert('Informe corretamente os dados da conta')
        inDataVenci.focus
        return
    }

    var hoje = new Date()
    var vencto = new Date()

    var partes = dateVenc.split('-')
    vencto.setDate(Number(partes[2]))
    vencto.setMonth(Number(partes[1]) - 1)
    vencto.setFullYear(Number(partes[0]))

    var atraso = hoje - vencto

    var multa = 0
    var juros = 0

    if(atraso > 0){
        var dias = math.round(atraso / 86400000)
        multa = valor * TAXA_MULTA
        juros = (valor * TAXA_JUROS) * dias
    }

    var total = valor + multa + juros

    outMulta.value = multa.toFixed(2)

    outJuros.value = total.toFixed(2)
    
}

var bt = document.getElementById('btNovaConta')
    bt.addEventListener('click', calcularMultaJuros)
