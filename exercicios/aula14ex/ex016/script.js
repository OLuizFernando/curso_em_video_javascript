function contar() {
    var inicio = Number(window.document.querySelector('input#txtinicio').value)
    var fim = Number(window.document.querySelector('input#txtfim').value)
    var passo = Number(window.document.querySelector('input#txtpasso').value)
    var res = window.document.querySelector('div#res')

    if (inicio < fim && passo > 0) {
        res.innerHTML = '<p> Contando: <br>'
        for (var i = inicio; i <= fim; i += passo) {
            res.innerHTML += `${i} &#x1F449 `
        }
        res.innerHTML += '&#x1F3C1 </p>'
    } else if (inicio > fim && passo < 0) {
        res.innerHTML = '<p> Contando: <br>'
        for (var i = inicio; i >= fim; i += passo) {
            res.innerHTML += `${i} &#x1F449 `
        }
        res.innerHTML += '&#x1F3C1 </p>'
    } else {
        res.innerHTML = 'ERRO: Insira parâmetros válidos.'
    }
}