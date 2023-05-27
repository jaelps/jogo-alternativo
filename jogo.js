var resposta = ''
var ativadorS = window.document.querySelector('input.bt-s')
var ativadorN = window.document.querySelector('input.bt-n')
var boxP = window.document.querySelector('.areaPrincipal')
var resposta = sValor
var resposta = nValor


function animacaoDeCarregamento(){
  var sValor = ativadorS.value
  var nValor = ativadorN.value
  if (resposta == 'sim'){
      boxP.innerHTML = '<p>Iniciando conexão ...</p>'
  }
    /*boxP.innerHTML = '<p>Iniciando conexão ...</p>'*/
}

ativadorS.addEventListener('click', animacaoDeCarregamento())
ativadorN.addEventListener('click', animacaoDeCarregamento())