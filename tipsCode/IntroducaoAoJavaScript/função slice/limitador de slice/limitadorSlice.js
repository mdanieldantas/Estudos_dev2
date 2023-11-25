
function campoBio() {

  let descricaoBio = prompt("Escreva sua bio com até 140 caracteres:  ",);
  let contadorDeCaracteres = descricaoBio.length;
  if (descricaoBio.length < 140) {
    let restanteCaracteres = 140 - contadorDeCaracteres;
    alert(`${descricaoBio.slice(0, 140)}
    Você ainda tem disponivel ${restanteCaracteres}.`)
  } else {
    descricaoBio.slice(0, 140);
    let restanteCaracteres = 140 - contadorDeCaracteres;

    alert(`${descricaoBio.slice(0, 140)} 

    Você ultrapassou o numero de caracteres em ${restanteCaracteres}`);
  }

}

campoBio()
