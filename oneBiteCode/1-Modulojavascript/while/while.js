// enquanto a condição faça algo várias vezes
let velocidade = 80

while (velocidade > 0) {
  alert(' O carro está a ' + velocidade + 'Km/h')
  velocidade -= 20
  alert('Diminuindo 20 km/h')
  if (velocidade === 40) {
    break
  }
}
alert('O carro parou!')

/*
No while um bloco de código é executado ate que um teste condicional se torne falso, sendo importante lembrar que a condição analisada para a execução do laço de repetição deverá retornar um valor booleano. Por exemplo:
let salario = 1000

while (salario < 5000) {
  salario += 100;

  console.log("O salário ainda é R$" + salario);
}
*/