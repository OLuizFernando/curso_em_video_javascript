function gerarTabuada() {
    var txtnum = window.document.querySelector('input#txtnum')
    var tabuada = window.document.querySelector('select#tabuada')
    if (txtnum.value.length == 0) {
        window.alert('Por favor, digite um número.')
    } else {
        num = Number(txtnum.value)
        tabuada.innerHTML = ''
        for (var i = 1; i <= 10; i++) {
            var item = window.document.createElement('option')
            item.text = `${num} x ${i} = ${num * i}`
            tabuada.appendChild(item)
        }
    }
}