
function campoBio() {

  let descricaoBio = prompt("Escreva sua bio com até 140 caracteres:  ",);
  let contadorDeCaracteres = descricaoBio.length;
  if (descricaoBio.length > 140) {
    alert("A bio deve ter até 140 caracteres, refaça.")
    return;
  }
  let restanteCaracteres = 140 - contadorDeCaracteres;
  alert(`${descricaoBio}. Você ainda tem ${restanteCaracteres} caracteres restantes`);
}

campoBio()


