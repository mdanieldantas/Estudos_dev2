// entrada
let primeiroNumero = Number(prompt('Insira o primeiro numero: '))
let segundoNumero = Number(prompt('Insira o segundo numero: '))

// processamento 
let soma = primeiroNumero + segundoNumero
let subtracao = primeiroNumero - segundoNumero
let divisao = primeiroNumero / segundoNumero
let multiplicacao = primeiroNumero * segundoNumero

// resultado
alert(`
O resultado é:
Para soma: ${soma}.
Para subtração: ${subtracao}.
Para divisão: ${divisao}.
Para multiplicação: ${multiplicacao}.
`)


/*

const primeiroNumero = prompt('Informe o primeiro numero')
const segundoNumero = prompt('informe o Segundo Numero')

const x = parseFloat(primeiroNumero)
const y = parseFloat(segundoNumero)

const soma = x + y
const subtracao = x - y
const multiplicacao = x * y
const divisao = x / y

alert(
  'Resultados: ' +
  '\nSoma: ' + soma +
  '\nSubtração: ' + subtracao +
  '\nMultiplicação: ' + multiplicacao +
  '\nDivisão: ' + divisao
)

/*
const entrada1 = prompt("Informe o Primeiro número:");
const entrada2 = prompt("Informe o segundo número:");

const x = parseFloat(entrada1);
const y = parseFloat(entrada2);

const soma = x + y;
const subtracao = x - y;
const multiplicacao = x * y;
const divisao = x / y;

alert(
  "Resultados: \n" +
    "\nSoma: " +
    soma +
    "\nSubtração: " +
    subtracao +
    "\nMultiplicação: " +
    multiplicacao +
    "\nDivisão: " +
    divisao
);

*/