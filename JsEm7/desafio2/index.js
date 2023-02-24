let ProductValue = Number(prompt('Enter the product value: '))

if (ProductValue >= 20) {
  document.getElementById('result').innerHTML = 'Aproved'
} else {
  document.getElementById('result').innerHTML = 'reprovado'
}

