// 1 -Faça um programa que peça dois números e verifique (usando if e else) e imprima o maior deles.
/*
let primeironumero = parseFloat(prompt("Coloque o primeiro número a ser comparado"))
let segundoonumero = parseFloat(prompt("Coloque o segundo número a ser comparado"))
if (primeironumero > segundoonumero) {
  alert(primeironumero + " é maior que " + segundoonumero)
} else {
  alert(primeironumero + " é menor que " + segundoonumero)
}


// 2 - Faça um programa que peça um valor e mostre na tela se o valor é positivo ou negativo.

alert("Bem vindo ao comparador de números positivos ou negativos")
let primeironumero = parseFloat(prompt("Escreva um número: "))

if (primeironumero > 0) {
  alert(primeironumero + " é um número positivo.")
} else {
  alert(" é um número negativo.")
}



// Faça um programa que verifique (usando if e else) se uma letra digitada é "F" ou "M". Conforme a letra escrever: F – Feminino, M - Masculino, Sexo inválido.

alert("Bem vindo!\nEscreva F  para masculino e M  para feminino.")

var primeiraLetra

do {

  primeiraLetra = prompt("Escreva a letra corresponde ao seu sexo:").toLowerCase();

  if (primeiraLetra == "m") {
    alert("Masculino.");
  } else if (primeiraLetra == "f") {
    alert("Feminino.");
  } else {
    alert("Opção inválida. Digite 'F' para Feminino ou 'M' para Masculino.");
  }
}

while (primeiraLetra != "f" && primeiraLetra != "m");


// 4 - Faça um programa que verifique (usando "if" e "else") se uma letra digitada é vogal ou consoante.

alert("Bem vindo ao reconhecedor de vogais e consoantes.")

let letraUm

do {
  letraUm = prompt("Escreva a letra que deseja conferir: ").toLowerCase()

  if (
    letraUm === "a" ||
    letraUm === "e" ||
    letraUm === "i" ||
    letraUm === "o" ||
    letraUm === "u"

  ) { alert(" Sua letra é uma vogal.") }
  else if (letraUm >= "a" && letraUm <= "z") { prompt(" Sua letra é uma consoante") }
  else { alert("escreva um caractere válido.") }
} while (!isNaN(letraUm))




// 5 - Faça um programa para a leitura de duas notas parciais de um aluno:
//A mensagem “Aprovado”, se a média alcançada for maior ou igual a sete.
//A mensagem “Aprovado com Distinção”, se a média for igual a dez.
//A mensagem “Reprovado” se a média for menor do que sete.

alert('Seja bem vindo ao comparador de médias.')

let notaUm
let notaDois
let media

notaUm = parseFloat(prompt('Coloque sua primeira nota parcial: ')).toFixed(2)
notaDois = parseFloat(prompt('Coloque sua segunda nota parcial: ')).toFixed(2)

media = parseFloat(notaUm + notaDois / 2).toFixed(1)

alert('Sua média é: ' + media)

if (media == 10) {
  alert('Aprovado com distinção!')
} else if (media >= 5) {
  alert('Aprovado!')
} else {
  alert('Reprovado!')
}

*/

