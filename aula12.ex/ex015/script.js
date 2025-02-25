function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=00 && idade < 10) {
                img.setAttribute('src', 'bebe-H.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem-H.png') 
            } else if (idade < 50) {
                img.setAttribute('src', 'homem.png')
            } else {
                img.setAttribute('src', 'idoso-H.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=00 && idade < 10) {
                img.setAttribute('src', 'bebe-M.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem-M.png')
            } else if (idade < 50) {
                img.setAttribute('src' , 'mulher.png')
            } else {
                img.setAttribute('src' , 'idosa-M.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade}.`
        res.style.padding = '10px'
        res.appendChild(img)
    }
}