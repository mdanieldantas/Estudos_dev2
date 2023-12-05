
function pagarConta() {
  let nomesArray = ["Dan", "Chico", "Zé", "Abilio"];
  let randomIndex = Math.floor(Math.random() * nomesArray.length);
  let randomNome = nomesArray[randomIndex];
  return console.log(randomNome);
}
pagarConta()