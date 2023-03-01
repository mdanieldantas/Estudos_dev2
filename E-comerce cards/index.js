
const caixasImagem = document.querySelectorAll('.caixa-img');

caixasImagem.forEach(function (caixa) {
  const imagens = caixa.querySelectorAll('img');
  let idx = 0;
  function carrosel() {
    idx++;
    if (idx > imagens.length - 1) {
      idx = 0;
    }
    caixa.style.transform = `translatex(${- idx * 310}px)`
  }
  setInterval(carrosel, 2500)
})
// Encerramento de Slider

let botoes = document.querySelectorAll('.colors div');

botoes.forEach(function (botao) {
  botao.addEventListener('click', function () {
    botoes.forEach(function (outroBotão) {
      outroBotão.classList.remove('selecionado')
    })
    botao.classList.add('selecionado')
  })
})