/*
Questão ## Cálculo de Dano

Escreva um programa que permita inserir o nome e o poder de ataque de um personagem, depois o nome, a quantidade de pontos de vida, o poder de defesa de outro personagem e se ele possui um escudo, e então calcule a quantidade de dano causado baseado nas seguintes regras:

- Se o poder de ataque for maior do que a defesa e o defensor não possuir um escudo, o dano causado será igual a diferença entre o ataque e a defesa.
- Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo, o dano causado será igual a metade da diferença entre o ataque e a defesa.
- Se o poder de ataque for menor ou igual a defesa, o dano causado será 0.

Por fim, o programa deve subtrair a quantidade de dano da quantidade de pontos de vida do personagem defensor e exibir na tela a quantidade de dano e as informações atualizadas de ambos os personagens.

-----------------------------------------------------------------
Resolução lógica Daniel

Entradas
-nome do personagem 
-Poder de ataque

-nome do inimigo
-pontos de vida do inimigo
-poder de defesa do inimigo
-o inimigo possui escudo?

Processamento
-CONDICIONAIS:
// Se o poder de ataque for maior do que a defesa e o defensor não possuir um escudo, o dano causado será igual a diferença entre o ataque e a defesa.

// Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo, o dano causado será igual a metade da diferença entre o ataque e a defesa.

// Se o poder de ataque for menor ou igual a defesa, o dano causado será 0.

Saida:
Por fim, o programa deve subtrair a quantidade de dano da quantidade de pontos de vida do personagem defensor e exibir na tela a quantidade de dano e as informações atualizadas de ambos os personagens.


*/

let heroi = prompt("Coloque o nome do seu herói:");
let poderAtaque = parseFloat(prompt("Escreva o poder de ataque do seu herói: "));

let inimigo = "inimigo";
let vidaInimigo = parseFloat(50);
let defesaInimigo = parseFloat(25);
let temEscudo = false; //true or false

// Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo, o dano causado será igual a metade da diferença entre o ataque e a defesa.
let danoSemEscudo = parseFloat(poderAtaque - defesaInimigo);
let danoComEscudo = parseFloat(danoSemEscudo / 2);
let totalDanoSemEscudo = parseFloat(vidaInimigo - danoSemEscudo)
let totalDanoComEscudo = parseFloat(vidaInimigo - danoComEscudo)

// Se o poder de ataque for maior do que a defesa e o defensor não possuir um escudo, o dano causado será igual a diferença entre o ataque e a defesa.
if (poderAtaque > defesaInimigo && temEscudo) {
  alert("O dano causado no inimigo foi de: " + danoComEscudo + "\nA quantidade de vida do inimigo é de: " + totalDanoComEscudo);
  // Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo, o dano causado será igual a metade da diferença entre o ataque e a defesa.
} else if (poderAtaque > defesaInimigo && !temEscudo) {
  alert("O dano causado no inimigo foi de: " + danoSemEscudo + "\nA quantidade de vida restante do inimigo é de: " + totalDanoSemEscudo);
} else {
  alert("O dano causado foi: 0");
}
//Por fim, o programa deve subtrair a quantidade de dano da quantidade de pontos de vida do personagem defensor e exibir na tela a quantidade de dano e as informações atualizadas de ambos os personagens.