var listaNums = []
var txtnum = window.document.querySelector('input#txtnum')
var sel = window.document.querySelector('select#sel')
var res = window.document.querySelector('div#res')

function adicionar() {
    if (txtnum.value.length != 0 && listaNums.indexOf(Number(txtnum.value)) == -1 && Number(txtnum.value) >= 1 && Number(txtnum.value) <= 100) {
        var num = Number(txtnum.value)

        var item = window.document.createElement('option')
        item.text = `Valor ${num} adicionado`
        sel.appendChild(item)
        listaNums.push(num)

        txtnum.value = ''
        txtnum.focus()

        if (res.innerHTML != '') {
            res.innerHTML = ''
        }
    } else {
        window.alert('Valor inválido ou já adicionado.')
    }
}

function finalizar() {
    listaNums.sort()
    var tamanhoLista = listaNums.length

    var maiorValor = listaNums[0]
    var menorValor = listaNums[0]
    var somaTotal = 0

    for (let pos in listaNums) {
        somaTotal += listaNums[pos]

        if (listaNums[pos] > maiorValor) {
            maiorValor = listaNums[pos]
        }

        if (listaNums < menorValor) {
            menorValor = listaNums[pos]
        }
    }

    var media = somaTotal / tamanhoLista

    if (sel.length != 0) {
        res.innerHTML = `
    <p>
        Ao todo, temos ${tamanhoLista} números cadastrados.
    </p>
    <p>
        O maior valor informado foi ${maiorValor}.
    </p>
    <p>
        O menor valor informado foi ${menorValor}.
    </p>
    <p>
        Somando todos os valores, temos ${somaTotal}.
    </p>
    <p>
        A média dos valores digitados é ${media}.
    </p>
    `
    } else {
        window.alert('Adicione valores antes de finalizar.')
    }
}