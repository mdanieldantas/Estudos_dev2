
//cria uma variavel que seleciona todo array da calasse drum
let numberOfDrumButtons = document.querySelectorAll(`.drum`).length

//contador i = 0; enquanto i for menor que o numero total do array ele adiciona i+1
for (let i = 0; i < numberOfDrumButtons; i++) {

  //seleciona todas as tags button e usa o contador i para ouvir o click e executar a função clicou
  document.querySelectorAll(`button`)[i].addEventListener(`click`, function () {
    alert(`clicou`)
  })
}
