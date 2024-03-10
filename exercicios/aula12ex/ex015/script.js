function verificar() {
    var agora = new Date()
    var anoAtual = agora.getFullYear()
    var anoNasc = Number(window.document.querySelector('input#txtano').value)
    var sexo = window.document.getElementsByName('radsex')
    var res = window.document.querySelector('div#res')

    if (sexo[0].checked) {
        sexo = 'Homem'
    } else {
        sexo = 'Mulher'
    }

    if (anoNasc > anoAtual || anoNasc == 0) {
        res.innerHTML = 'Insira um ano de nascimento válido'
    } else {
        var idade = anoAtual - anoNasc
        imagem = verificarImagem(idade, sexo)
        res.innerHTML = `<p>${sexo} com ${idade} anos.</p>`
        res.innerHTML += `<p><img src="${imagem}" alt="Resultado"></p>`
    }
}

function verificarImagem(idade, sexo) {
    if (idade < 13 && sexo == 'Homem') {
        return 'imagens/crianca_m.png'
    } else if (idade < 13 && sexo == 'Mulher') {
        return 'imagens/crianca_f.png'
    } else if (idade < 21 && sexo == 'Homem') {
        return 'imagens/jovem_m.png'
    } else if (idade < 21 && sexo == 'Mulher') {
        return 'imagens/jovem_f.png'
    } else if (idade < 51 && sexo == 'Homem') {
        return 'imagens/adulto_m.png'
    } else if (idade < 51 && sexo == 'Mulher') {
        return 'imagens/adulto_f.png'
    } else if (idade < 100 && sexo == 'Homem') {
        return 'imagens/idoso_m.png'
    } else if (idade < 100 && sexo == 'Mulher') {
        return 'imagens/idoso_f.png'
    } else {
        return 'imagens/caveira.png'
    }
}