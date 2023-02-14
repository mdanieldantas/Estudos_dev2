const nomeveiculo1 = prompt('Insira o nome do primeiro veiculo: ')
const velocidadeVeiculo1 = parseInt(prompt('Insira a velocidade do primeiro Veiculo: '))

const nomeveiculo2 = prompt('Insira o nome do segundo veiculo: ')
const velocidadeVeiculo2 = parseInt(prompt('Insira a velocidade do Segundo veiculo: '))

if (velocidadeVeiculo1 > velocidadeVeiculo2) {
  alert(nomeveiculo1 + ' é o mais rápido');

}

if (velocidadeVeiculo1 === velocidadeVeiculo2) {
  alert('As duas velocidades são iguais');
}

if (velocidadeVeiculo1 < velocidadeVeiculo2) {
  alert('veiculo 2 mais rápido')
}
else {

}
// } else if {
 // alert('veiculo 2 é mais rápido');
//}



/*

## Teste de Velocidade

Escreva um programa em javascript que permita 

inserir o nome e a velocidade de dois veículos

e exiba na tela uma mensagem dizendo qual dos dois é mais rápido 

(ou que as velocidades são iguais se este for o caso)




## Cálculo de Dano

Escreva um programa que permita inserir o nome e o poder de ataque de um personagem, depois o nome, a quantidade de pontos de vida, o poder de defesa de outro personagem e se ele possui um escudo, e então calcule a quantidade de dano causado baseado nas seguintes regras:

- Se o poder de ataque for maior do que a defesa e o defensor não possuir um escudo, o dano causado será igual a diferença entre o ataque e a defesa.
- Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo, o dano causado será igual a metade da diferença entre o ataque e a defesa.
- Se o poder de ataque for menor ou igual a defesa, o dano causado será 0.

Por fim, o programa deve subtrair a quantidade de dano da quantidade de pontos de vida do personagem defensor e exibir na tela a quantidade de dano e as informações atualizadas de ambos os personagens.

-----------------Pensamento computacional---------------

1. Decomposição
Quando o sistema computacional precisa solucionar um problema complexo, a primeira fase é identificá-lo e, posteriormente, dividi-lo em processos mais simples. Como se tivéssemos uma equação de segundo grau e, para resolvê-la, subdividimos ela em equações de primeiro grau.

O mesmo pode ser aplicado em outros problemas do cotidiano, com a finalidade de facilitar a resolução.

2. Reconhecimento de padrões
Da mesma forma que repartir um problema complexo em vários simples, a identificação de padrões também funciona como um facilitador. É exatamente esse o segundo pilar do pensamento computacional.

A ideia é conseguir visualizar pontos comuns tanto no próprio problema, como em outras soluções que já encontramos.

3. Abstração
Hoje, o volume de informações, dados e conhecimento que temos acesso é extremamente positivo para o desenvolvimento pessoal e da sociedade. Mas você já deve ter notado que muitas vezes há um excesso que dificulta a visualização do que realmente importa, não é mesmo?

Dentre as habilidades dos processos computacionais, percebemos que, para solucionar problemas, as máquinas identificam e focam em itens realmente relevantes. Deixando de lado, portanto, informações que não agregam à solução.

Por isso, o terceiro pilar do pensamento computacional trata da abstração. A ideia de filtrar o conteúdo recebido, de maneira a eliminar o excesso de informação irrelevante.

4. Algoritmos
Por fim, com todos os pilares anteriores, é possível identificar e criar regras para a resolução de problemas complexos. O último pilar do pensamento computacional é, portanto, a construção de algoritmos que, além de solucionar a questão estudada, também possibilitam a criação de um banco de soluções replicáveis.

Como você pode perceber estamos falando exatamente do modus operandi do sistema computacional. Trazendo, portanto, as habilidades e métodos para além do digital.

Resumidamente, no pensamento computacional, nós identificamos o problema, dividimos ele, criamos padrões e, por fim, solucionamos com o uso de lógica.
*/