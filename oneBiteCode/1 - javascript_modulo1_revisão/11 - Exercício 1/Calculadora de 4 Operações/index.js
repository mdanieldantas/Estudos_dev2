alert("Bem vindo a Calculadora JS!")

// entrada

let primeironumero = parseFloat(prompt("Escreva o primeiro número que quer operar "))

let segundonumero = parseFloat(prompt("Escreva o segundo número que quer operar "))

let soma = primeironumero + segundonumero
let subtração = primeironumero - segundonumero
let multiplicação = primeironumero * segundonumero
let divisao = primeironumero / segundonumero

alert("Seu resultado é: \n" +
  "\nsoma: " + soma + "." +
  "\nsubtração: " + subtração + "." +
  "\nmultiplicação:" + multiplicação + "." +
  "\ndivisão:" + divisao + "."


)


/*
const entrada1 = prompt("Informe o primeiro número:")
const entrada2 = prompt("Informe o segundo número:")

const x = parseFloat(entrada1)
const y = parseFloat(entrada2)

const soma = x + y
const subtracao = x - y
const multiplicacao = x * y
const divisao = x / y

alert(
  "Resultados:\n" +
  "\nSoma: " + soma +
  "\nSubtração: " + subtracao +
  "\nMultiplicação: " + multiplicacao +
  "\nDivisão: " + divisao
)
*/