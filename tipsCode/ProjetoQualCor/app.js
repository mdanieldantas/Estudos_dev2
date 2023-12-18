//criar uma variavel com um array de cores diversas
const colors = [`green`, `red`, `rgba(133,122,200)`, `#f15025`];

// criar uma variavel que captura o id do botão
const btn = document.getElementById(`btn`)

//criar uma variavel que captura a classe do spam 
const color = document.querySelector(`.span-color`)

// criar uma função que ouve o clique no botão 
btn.addEventListener(`click`, function () {
  console.log(`clicou no botão`)

  const randomNumber = getRandomNumbers()

  const mainColor = document.querySelector(`#main-color`)
  mainColor.style.backgroundColor = colors[randomNumber]
  color.textContent = colors[getRandomNumbers()]

  //   document.body.style.backgroundColor = colors[randomNumber]
  //   color.textContent = colors[randomNumber]
})

//console.log(btn, color)

function getRandomNumbers() {
  return Math.floor(Math.random() * colors.length)

}