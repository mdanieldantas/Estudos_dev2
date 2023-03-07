// entrada




//processamento


//saída





const colors = ['Red', 'Blue', 'Yellow', 'Purple', 'Green', 'Black']
const btn = document.getElementById('btn')
const color = document.querySelector('.color')


// no click
btn.addEventListener('click', function () {
  const randomColor = getRandomColor()
  document.body.style.background = colors[randomColor] // trocando a cor do backgrund
  color.textContent = colors[randomColor]
  //console.log(randomColor)
})

// gerar numeros randons
function getRandomColor() {
  return Math.floor(Math.random() * colors.length)
}

