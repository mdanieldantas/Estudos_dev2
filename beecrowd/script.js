const { match } = require('assert');

var input = require('fs').readFileSync('stdin', 'utf8');
var PI = 3.14159;
var raio = parseFloat(input);
var area = PI * (raio * raio);
console.log(`A=${area.toFixed(4)}`);

/*
Resoluçao 1002:
var input = require('fs').readFileSync('stdin', 'utf8');
var PI = 3.14159;
var raio = parseFloat(input);
var area = PI * (raio * raio);
console.log(`A=${area.toFixed(4)}`);

Explicação:
primeira variavel: PI = 3.14159:
Segunda Variavel é: raio = 2.00
Terceira variavel é: area = 3.14159 * (2.00 * 2.00) resolve primeiro o que está entre parênteses  3.14159 * (4)

var input = require('fs').readFileSync('stdin', 'utf8');

var pi = 3.14159;
var raio = parseFloat(input); // parseFloat transforma em numero decimal

var area = pi * (raio * raio); //
// var area = pi * Math.pow(raio, 2); // Math coloca funcionalidade matematica ao no  e pow multiplica 
console.log(`A=${area.toFixed(4)}`); // no problema é pedido 4 casas decimais por isso o uso do toFixed (4) e ele muda o resultado de 2.56636 para 12.5664

Exercicio 1002:
A fórmula para calcular a área de uma circunferência é: area = PI.raio2 Considerando para este problema que 

PI = 3.14159:

- Efetue o cálculo da área, elevando o valor de raio ao quadrado e multiplicando por PI.

Entrada
A entrada contém um valor de ponto flutuante (dupla precisão), no caso, a variável raio.

Saída
Apresentar a mensagem "A=" seguido pelo valor da variável area, conforme exemplo abaixo, com 4 casas após o ponto decimal. Utilize variáveis de dupla precisão (double). Como todos os problemas, não esqueça de imprimir o fim de linha após o resultado, caso contrário, você receberá "Presentation Error".

Exemplos de Entrada	seguido de Exemplos de Saída
2.00
A=12.5664
-----
100.64
A=31819.3103
--------
150.00
A=70685.7750

------------------------------------------------------------------------
1001
Leia 2 valores inteiros e armazene-os nas variáveis A e B. Efetue a soma de A e B atribuindo o seu resultado na variável X. Imprima X conforme exemplo apresentado abaixo. Não apresente mensagem alguma além daquilo que está sendo especificado e não esqueça de imprimir o fim de linha após o resultado, caso contrário, você receberá "Presentation Error".

Entrada
A entrada contém 2 valores inteiros.

Saída
Imprima a mensagem "X = " (letra X maiúscula) seguido pelo valor da variável X e pelo final de linha. Cuide para que tenha um espaço antes e depois do sinal de igualdade, conforme o exemplo abaixo.
Exemplos de Entrada	Exemplos de Saída
10
9
X = 19

-10
4
X = -6

15
-7
X = 8

RESOLUÇAO Exercicio 1001:

var input lê stdin 
e a var valores são os numeros dados pelo imput no doc stdin transformados em numeros inteiros por causa do parseInt, então devolve em um array, com shift() vc pega o primeiro número da array retira e retorna ele


var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');

var A = parseInt(valores.shift());
var B = parseInt(valores.shift());

var X = A + B

console.log(`X = ${X}`)

----------------------------------------------------------

*/