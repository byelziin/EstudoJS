alert('Olá!')

function Contar() {
    var i = document.querySelector('input#num').value
    var f = document.querySelector('input#fim').value
    var p = document.querySelector('input#pas').value
    var R = document.querySelector('div#res')
    
    R.innerHTML = ''; 
    
    if (p <= 0) {
        alert('O passo deve ser maior que 0!')
        return;
    }

    if (i > f) {
        alert("O valor de início deve ser menor ou igual ao valor de fim.");
        return;
    }

    for (var j = Number(i); j <= Number(f); j += Number(p)) {
        R.innerHTML += j + '👉' ;
        
    }

    R.innerHTML += ' 🏁';
}