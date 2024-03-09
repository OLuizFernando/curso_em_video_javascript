function carregar () {
    var agora = new Date()
    var hora = agora.getHours()
    var minuto = agora.getMinutes()
    var background = window.document.body.style.background
    var label = window.document.querySelector('div#label')
    var img = window.document.querySelector('div#img')

    label.innerHTML = `Agora são ${hora.toString().padStart(2, '0')}:${minuto.toString().padStart(2, '0')}`

    if (hora < 12) {
        img.innerHTML = '<img src="imagens/manha.png" alt="Manhã">'
        window.document.body.style.background = '#B1AFAC'
    } else if (hora < 19) {
        img.innerHTML = '<img src="imagens/tarde.png" alt="Tarde">'
        window.document.body.style.background = '#833823'
    } else {
        img.innerHTML = '<img src="imagens/noite.png" alt="Noite">'
        window.document.body.style.background = '#041E2B'
    }
}