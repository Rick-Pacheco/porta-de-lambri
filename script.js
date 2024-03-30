// 207,5 x 67,3

// 2 portas = qtdpeças * 2  + perfilados * 2 = 28
// 1 folha = 8 ... 3 folhas = 24 + 4 peças da 4a folha
// resulado9 = qtdpeças - tem que ser alterado ...4o input
//
//
//
//
//

// -----------------------------------------------
const btnReturn = document.getElementById('btn-result')
const btnClear = document.getElementById('btn-clear')

//tratamento de erro nos dados de entrada de valores
function fncTratamento() {
    const iptAltura = document.getElementById('altura')
    const iptLargura = document.getElementById('largura')

    if ((iptAltura.value === "" || iptLargura.value === "")) {
        alert('Favor digitar valor de Altura/Largura para continuar!')
    } else {
       fncResult()
    }
}

//retorna os dados após inserção dos valores de altura e largura
function fncResult() {

    const iptHeight = parseFloat(document.getElementById('altura').value)
    const iptWidth = parseFloat(document.getElementById('largura').value)
    let selSelect = document.getElementById('select')

    let qtdPecas, sizePerfilado, pecasPorLambri, sobraDescarteLambri, voidPecasPorLambri = 0
    let voidPecasTotalLambri, pecasFinalParcialLambri, sobraLastLambriCm, qtdTotalPecas = 0

    qtdPecas = iptHeight / 15 //altura pela largura do lambri
    sizePerfilado = iptHeight - (Math.floor(qtdPecas) * 15) //quanto falta para atingir a altura(perfilado)
    pecasPorLambri = 600 / iptWidth //1 lambri dividido pela largura para saber quantas peças dá por lambri
    sobraDescarteLambri = (600 - 2.5) - (Math.floor(pecasPorLambri) * iptWidth) //sobra por peças de lambri
    voidPecasPorLambri = Math.floor(pecasPorLambri) // para não alterar o valor de pecasPorLambri mais abaixo
    qtdTotalPecas = Math.floor(qtdPecas) // para não alterar o valor do resulado1 mais abaixo

    // //tratando o select para efetuar as adições de valores
    let selecionaQtd = 0
    if (selSelect.value === "one") {
        qtdPecas = Math.floor(qtdPecas) * 1
        selecionaQtd = 1
    } else if (selSelect.value === "two") {
        qtdPecas = Math.floor(qtdPecas) * 2
        selecionaQtd = 2
    } else if (selSelect.value === "three") {
        qtdPecas = Math.floor(qtdPecas) * 3
        selecionaQtd = 3
    } else if (selSelect.value === "four") {
        qtdPecas = Math.floor(qtdPecas) * 4
        selecionaQtd = 4
    } else if (selSelect.value === "five") {
        qtdPecas = Math.floor(qtdPecas) * 5
        selecionaQtd = 5
    }

    //para adicionar +1 ao contador por conta do perfilado
    if (sizePerfilado > 0.5) {
        qtdTotalPecas = qtdPecas + selecionaQtd
    }

    // saber a quantidade de lambris serão gastos
    let contador = 0;
    let voidAuxiliar = voidPecasPorLambri
    while (voidPecasPorLambri <= qtdTotalPecas) { //quantidade de peças do lambri < quantidade de peças total esperada.
        voidPecasPorLambri += voidAuxiliar //dobra quantidade de peças de um lambri
        contador++ //adiciona 1 ao contador
        if (voidPecasPorLambri > qtdTotalPecas) { //quantidade de peças do lambri > quantidade de peças total esperada
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
    const iptQtdPerfilado = document.getElementById('qtdPerfilado')
    const iptPerfilado = document.getElementById('perfilado')
    const iptTotPecas = document.getElementById('totPecas')
    const iptLambri = document.getElementById('lambri')
    const iptSobra = document.getElementById('sobra-descarte')
    const iptGastoInitLambri = document.getElementById('gasto-inicial-lambri')
    const iptParcialLambriCm = document.getElementById('parcial-lambri-cm')
    const iptParcialLambriQtd = document.getElementById('parcial-lambri-qtd')
    const iptGastoFinalLambri = document.getElementById('gasto-final-lambri')

    // enviando retorno aos inputs
    iptQtdPecas.value = Math.floor(qtdPecas)
    iptQtdPerfilado.value = selecionaQtd
    iptPerfilado.value = sizePerfilado
    iptTotPecas.value = qtdTotalPecas
    iptLambri.value = Math.floor(pecasPorLambri)
    iptSobra.value = sobraDescarteLambri.toFixed(1)
    iptGastoInitLambri.value = contador
    iptParcialLambriCm.value = sobraLastLambriCm.toFixed(1) // medida em cm
    iptParcialLambriQtd.value = pecasFinalParcialLambri //qtd
    iptGastoFinalLambri.value = contTot


}

//ao acionar botão "Limpar" - para limpar todos os campos, para nova consulta
function fncClear() {
    const iptAltura = document.getElementById('altura')
    const iptLargura = document.getElementById('largura')
    let selSelect = document.getElementById('select')
    //----------------------------------------------------------
    const iptQtdPecas = document.getElementById('qtdPecas')
    const iptQtdPerfilado = document.getElementById('qtdPerfilado')
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
    selSelect.value = "one"
    //----------------------
    iptQtdPecas.value = ""
    iptQtdPerfilado.value = ""
    iptPerfilado.value = ""
    iptTotPecas.value = ""
    iptLambri.value = ""
    iptSobra.value = ""
    iptGastoInitLambri.value = ""
    iptParcialLambriCm.value = ""
    iptParcialLambriQtd.value = ""
    iptGastoFinalLambri.value = ""

}

btnReturn.addEventListener('click', fncTratamento)
btnClear.addEventListener('click', fncClear)

