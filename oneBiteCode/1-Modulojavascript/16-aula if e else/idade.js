let idade = prompt('diga sua idade: ')

if (idade >= 18) {
  alert('Você é de maior')
} else {
  alert('Você é de menor')
  if (idade < 13) {
    alert('Você é uma criança')
  }
}