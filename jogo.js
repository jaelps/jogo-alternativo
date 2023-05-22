resp = window.document.getElementById('x')


function interacao(){
    r = String(r.value)
    if (r == 'oi'){
        resp.innerHTML += 'Onde eu estou ?'
    }
}


resp.addEventListener('keypress', interacao)