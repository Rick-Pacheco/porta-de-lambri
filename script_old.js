// 207,5 x 67,3

// 207,5 / 15 = 13,82        = 13 peças 
// 13 x 15 = 195             = altura de 13 pecas
// 207,5 - 195 = 12,5        = 1 perfilado de 12,5
// -----------------------------------------------

// 600 / 67,3 = 8,91 = 8 peças em uma folha de 6m
// 8 x 67,3 = 538,4  = quantidade por folha
// 14 - 8 = 6 folhas que faltam para a porta completa
// 6 x 67,3 = 403,8 cm que gastará em uma nova folha de 6m
// 600 - 403,8 = 196,2 sobrará após cortar os 6 pedaços que faltam
// 196,2 / 67,3 = 2,91 dá pra fazer e ainda sobra    = 2 pecas + descarte de 
// 67,3 x 2 = 134
// 196,2 - 134 = 62,2

// -----------------------------------------------
const btnReturn = document.getElementById('result')
const btnClear = document.getElementById('clear')

//tratamento de erro nos dados de entrada de valores
function fncTratamento() {
    const iptAltura = document.getElementById('altura')
    const iptLargura = document.getElementById('largura')

    if ((iptAltura.value === "" || iptLargura.value === "")) {
        alert('Favor digitar valor de Altura/Largura para continuar!')
    } else{
       // alert('não funcionou!')
        fncResult()
    }
    

}

//retorna os dados após inserção dos valores de altura e largura
function fncResult() {

    const iptHeight = parseFloat(document.getElementById('altura').value)
    const iptWidth = parseFloat(document.getElementById('largura').value)
    //let selSelect = document.getElementById('select')

    let qtdLambri, sizePerfilado, pecasPorLambri, sobraDescarteLambri, voidPecasPorLambri = 0
    let voidPecasTotalLambri, pecasFinalParcialLambri, sobraLastLambriCm, qtdTotalPecas = 0

    qtdLambri = iptHeight / 15 //altura pela largura do lambri
    sizePerfilado = iptHeight - (Math.floor(qtdLambri) * 15) //quanto falta para atingir a altura(perfilado)
    pecasPorLambri = 600 / iptWidth //1 lambri dividido pela largura para saber quantas peças dá por lambri
    sobraDescarteLambri = (600 - 2.5) - (Math.floor(pecasPorLambri) * iptWidth) //sobra por peças de lambri
    voidPecasPorLambri = Math.floor(pecasPorLambri) // para não alterar o valor do resulado3 mais abaixo
    qtdTotalPecas = Math.floor(qtdLambri) // para não alterar o valor do resulado1 mais abaixo

    //para adicionar +1 ao contador por conta do perfilado
    if (sizePerfilado > 0.5) {
        qtdTotalPecas = qtdTotalPecas + 1 //13+1
    }

    // saber a quantidade de lambris serão gastos
    let contador = 0;
    while (voidPecasPorLambri < qtdTotalPecas) { //quantidade de peças do lambri < quantidade de peças total esperada.
        voidPecasPorLambri += voidPecasPorLambri  //dobra quantidade de peças de um lambri
        contador++ //adiciona 1 ao contador
        if (voidPecasPorLambri > qtdLambri) { //quantidade de peças do lambri > quantidade de peças total esperada
            voidPecasTotalLambri = contador * Math.floor(pecasPorLambri) //resultado contador * qtd peças por lambri
            pecasFinalParcialLambri = Math.floor(qtdTotalPecas) - voidPecasTotalLambri //qtd peças total - o que falta do proximo lambri
            sobraLastLambriCm = ((pecasFinalParcialLambri * iptWidth) + 1.5) // parte da proxima vara (6*67.3) + 1.5 = 405.3
        }


    }

    // se a falta de peças for maior que a largura de entrada, adiciona mais um lambri para compra
    let contTot = contador
    if (sobraLastLambriCm > iptWidth) {
        contTot = contTot + 1
    }

    //declaração de variáveis para preencher os inputs de retorno  
    const iptQtdPecas = document.getElementById('qtdPecas')
    const iptPerfilado = document.getElementById('perfilado')
    const iptTotPecas = document.getElementById('totPecas')
    const iptLambri = document.getElementById('lambri')
    const iptSobra = document.getElementById('sobra-descarte')
    const iptGastoInitLambri = document.getElementById('gasto-inicial-lambri')
    const iptParcialLambriCm = document.getElementById('parcial-lambri-cm')
    const iptParcialLambriQtd = document.getElementById('parcial-lambri-qtd')
    const iptGastoFinalLambri = document.getElementById('gasto-final-lambri')
    
    //enviando retorno aos inputs
    iptQtdPecas.value = Math.floor(qtdLambri)
    iptPerfilado.value = sizePerfilado
    iptTotPecas.value = qtdTotalPecas
    iptLambri.value = Math.floor(pecasPorLambri)
    iptSobra.value = sobraDescarteLambri.toFixed(1)
    iptGastoInitLambri.value = contador
    iptParcialLambriCm.value = sobraLastLambriCm.toFixed(1) //medida
    iptParcialLambriQtd.value = pecasFinalParcialLambri //qtd
    iptGastoFinalLambri.value = contTot
    
    //alert(iptQtdPecas)

    //const valor = parseInt(20)

    //iptQtdPecas = valor

    //iptQtdPecas = resultado1

    //     txtTexto.innerHTML = `Altura: <b> ${iptHeight.toFixed(1)} </b>  ==> 
    //     ${Math.floor(resultado1)} peças </br> E um perfilado de: ${resultado2} cm </br>
    //     Largura: <b> ${iptWidth.toFixed(1)} </b>  ==> ${Math.floor(resultado3)} peças por Folha de 6m
    //     e sobra(m) ${contador} pedaço(s) de ${resultado4.toFixed(1)} cm.</br>
    //     Para finalizar a porta precisa-se de ${contador} folha(s) e mais um pedaço de ${resultado8.toFixed(1)} 
    //     (${resultado7} peças), para completar o total de peças`

    //    console.log(iptQtdPecas)
}
 //ao acionar botão "Limpar" - para limpar todos os campos, para nova consulta
function fncClear() {
    const iptAltura = document.getElementById('altura')
    const iptLargura = document.getElementById('largura')
    //---------------------------------------------------
    const iptQtdPecas = document.getElementById('qtdPecas')
    const iptPerfilado = document.getElementById('perfilado')
    const iptTotPecas = document.getElementById('totPecas')
    const iptLambri = document.getElementById('lambri')
    const iptSobra = document.getElementById('sobra-descarte')
    const iptGastoInitLambri = document.getElementById('gasto-inicial-lambri')
    const iptParcialLambriCm = document.getElementById('parcial-lambri-cm')
    const iptParcialLambriQtd = document.getElementById('parcial-lambri-qtd')
    const iptGastoFinalLambri = document.getElementById('gasto-final-lambri')

    iptAltura.value = ""
    iptLargura.value = ""
    iptQtdPecas.value = ""
    iptPerfilado.value = ""
    iptTotPecas.value = ""
    iptLambri.value = ""
    iptSobra.value = ""
    iptGastoInitLambri.value = ""
    iptParcialLambriCm.value = ""
    iptParcialLambriQtd.value = ""
    iptGastoFinalLambri.value = ""

}

//ao acionar botões, chamar as funções, ...
btnReturn.addEventListener('click', fncTratamento)
btnClear.addEventListener('click', fncClear)

