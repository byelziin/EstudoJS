
function Contar() {
    var i = document.querySelector('input#num').value
    var f = document.querySelector('input#fim').value
    var p = document.querySelector('input#pas').value
    var R = document.querySelector('div#res')
    
    R.innerHTML = ''; 
    

    
    if (i === '' || f === '' || p === '') {
        alert('[ERRO], Falta prencher uma coluna')
        return;
    } else {
        R.innerHTML = 'Contando: <br>'
        if (p <= 0) {
            alert('Passo invalido! Considerando O PASSO 1')
            p = 1
        }
        if (Number(i) < Number(f)) {
            for (var j = Number(i); j <= Number(f); j += Number(p)) {
                R.innerHTML += j + ' 👉 ';
            }
        } else {
            for (var j = Number(i); j >= Number(f); j -= Number(p)) {
                R.innerHTML += j + ' 👉 ';
            }
        }
    }


    R.innerHTML += ' 🏁';
}

    

    