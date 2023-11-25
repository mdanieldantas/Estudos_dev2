
function bissexto(ano) {

  if (ano % 4 === 0) {
    if (ano % 100 === 0) {
      if (ano % 400 === 0) {
        return "É sim , bissexto"
      } else { return ("Não é bissexto.") }
    } else { return ("É sim bissexto") }
  } else { return ("Náo é bissexo") }

}
console.log(bissexto(2000))