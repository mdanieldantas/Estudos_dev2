window.alert('Seja bem vindo ao cadastro de recrutas!')
let primeironome = prompt("Escreva seu primeiro nome: ")
let sobrenome = prompt("Escreva seu sobrenome: ")
let campodeestudo = prompt("Escreva seu campo de estudos: ")
let anodenascimento = parseInt(prompt("Escreva seu ano de nascimento: "))

let idade = 2023 - anodenascimento

window.alert("Confirme seus dados. " + "\n"
  + "Nome: " + primeironome + " " + sobrenome + "." + "\n"
  + "Campo de estudo: " + campodeestudo + "." + "\n"
  + "Idade:  " + idade + "."

)