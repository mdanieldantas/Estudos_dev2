//function getPao(quantidadeDePao) //console.log(`Compre ${quantidadeDePao * 1.2} //pães.`)
//}
//getPao(50)

/*
function getPao(dinheiro) {
  let quantidadeDePao = dinheiro / 1.5;
  let troco = dinheiro % 1.5;
  console.log(`Compre ${Math.floor(quantidadeDePao)} pães, e seu troco será de ${(troco)} reais.`);
  return dinheiro % 1.5;
}
getPao(5)

function getPao(dinheiro) {

  let numeroDePaes = Math.floor(dinheiro / 1.5)
  let troco = dinheiro % 1.5
  console.log("A quantidade é de pães é " + numeroDePaes + " e o troco é " + troco)
}
getPao(20)
*/

function calcPao(valorDoDinheiro, custoDoPao) {
  let numeroDePaes = Math.floor(valorDoDinheiro / custoDoPao)
  return numeroDePaes
}