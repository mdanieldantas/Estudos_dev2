
const primeiroNome = prompt('Escreva o seu primeiro nome: ')
const sobrenome = prompt('Escreva seu sobrenome: ')
const campoDeEstudo = prompt('Escreva seu campo de estudo ')
const anoDeNascimento = prompt('Escreva seu ano de nascimento')

alert(
  'Cadastro realizado! '
  + '\nNome Completo: ' + primeiroNome + ' ' + sobrenome + '\nCampo de estudo:  ' + campoDeEstudo + '\nIdade: ' + (2023 - anoDeNascimento)
)

/*
const primeiroNome = prompt("Escreva o primeiro nome do recruta:");
const sobrenome = prompt("Escreva o sobrenome nome do recruta:");
const estudo = prompt("Escreva o campo de estudo do recruta:");
const anoDeNascimento = prompt("Escreva ano de nascimeto do recruta:");

alert(
  "Recruta cadastrado com sucesso!\n" +
  "\nNome Completo: " +
  primeiroNome +
  " " +
  sobrenome +
  "\nCampo de estudo: " +
  estudo +
  "\nIdade: " +
  (2023 - anoDeNascimento)
);
*/