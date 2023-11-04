/*torrar()
injetarPao()

function torrar() {
  console.log("torrando pão")
  injetarPao()
}

function injetarPao() {
  console.log('preparando para injetar o pão')
  console.log("finalizando")
}   

torrar("pão de forma")
torrar("pão")

function torrar(pao) {
  console.log("torrada feita com " + pao)
}


function createDatabase(databaseName) {
  console.log("connect:DBCONNECT;User=felipe")
}


let resultado = soma(5, 10)

console.log(`O resultado da soma é ${resultado}`)

function soma(numA, numB) {
  let somatorio = numA + numB
  return somatorio

}

*/


let userName = getFirstName("Felipe Amaral Silveira Campos")

console.log("Seja bem vindo " + userName)


function getFirstName(name) {
  let firstName = name.split(" ")
  return firstName[0]
}