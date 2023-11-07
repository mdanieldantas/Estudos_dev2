/*let convidado = {
  nome: "Pedrinho",
  idade: 10,
  presente: "quebra-cabeça"
};

console.log(convidado.nome + " tem " + convidado.idade + " anos e trouxe um " + convidado.presente + " de presente!");
*/

// classe é a forma
class formaDeBolo {
  constructor(saborDaMassa, saborRecheio) {
    this.saborDaMassa = saborDaMassa
    this.saborRecheio = saborRecheio

  }
  escrever() {
    console.log(`um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio}`)
  }
}


// objeto é a classe sendo usada
let boloFesta = new formaDeBolo("massa de chocolate", " nutella")

boloFesta.escrever();


