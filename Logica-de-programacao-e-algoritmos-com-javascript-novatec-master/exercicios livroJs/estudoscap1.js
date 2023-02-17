//Entrada
let precoDoProduto = Number(prompt('Insira o valor do produto: '))
//Processamento
let dezPorcento = Number(precoDoProduto * 0.10)
let precoAvista = Number(precoDoProduto - dezPorcento)
let vezes3 = Number(precoDoProduto / 3)

//saída
alert(
  `Pagamento a vista com 10% de desconto é de: ${precoAvista}
O pagamento a prazo é em até 3x de: ${vezes3}
  
  `)

/*
c) Elaborar um programa para uma loja, o qual leia o preço de um produto e
informe as opções de pagamento da loja. Calcule e informe o valor para
pagamento à vista com 10% de desconto e o valor em 3x.
Exemplo:
Preço R$: 60.00
À Vista R$: 54.00
Ou 3x de R$: 20.00
---------------------------------------------------
b) Elaborar um programa para uma pizzaria, o qual leia o valor total de
uma conta e quantos clientes vão pagá-la. Calcule e informe o valor a ser
pago por cliente.
Exemplo:
Valor da Conta R$: 90.00
Número de Clientes: 3
Valor por cliente R$: 30.00

//entrada
let ValorTotalConta = Number(prompt('Insira o valor da conta (números decimais devem ser separados por ponto final "."): '));
let numeroDeClientes = Number(prompt('Insira o número de clientes que dividirão a conta: '));
// processamento 
let valorPorCliente = ValorTotalConta / numeroDeClientes
//saída
alert('O valor que cada cliente deve pagar é de ' + valorPorCliente.toFixed(2))
----------------------
a) Elaborar um programa que leia um número. Calcule e informe os seus
vizinhos, ou seja, o número anterior e posterior
// Dados de Entrada
let numero = Number(prompt('Escreva seu número: '));

//Processamento
let vizinhoAnterior = numero - 1
let vivinhoPosterior = numero + 1

// Saida de Dados

alert('O vizinho anterior é: ' + vizinhoAnterior + ' E seu vizinho posterior é: ' + vivinhoPosterior)

------------programa viagem------------------
d) Elaborar um programa que leia a duração de uma viagem em dias e
horas. Calcule e informe a duração total da viagem em número de horas.
//leitura de dados
let dias = Number(prompt('Escreva aqui o número de dias: '));
let horas = Number(prompt('Escreva aqui o número de horas: '));
//processamento
let totalDeHoras = (dias * 24) + horas;

// saida de dados
alert(totalDeHoras)

let dias = 2 * 24
let horas = 5
let totalDeHoras = (dias + horas)
console.log(totalDeHoras)
--------------------------------dez porcento-----------------
let valor = Number(prompt('Insira o valor do Jantar: '))
let dezPorcento = valor / 10
let valorTotal = dezPorcento + valor
alert('O valor total do jantar foi de: ' + valorTotal + '\nO valor cobrado de dez porcento é de: ' + dezPorcento)


let valor = Number(prompt('Insira o valor do Jantar: '))
let dezPorcento = valor / 10
let valorTotal = dezPorcento + valor
alert('O valor total do jantar foi de: ' + valorTotal + '\nO valor cobrado de dez porcento é de: ' + dezPorcento)

let valorJantar = Number(prompt('valor do jantar: '))
let dezPorcento = valorJantar * 0.10;
let total = valorJantar + dezPorcento
alert('Taxa Garçom R$: ' + dezPorcento.toFixed(2) + '\nTotal R$: ' + total.toFixed(2))
---------------------soma-------------------
let num1 = Number(prompt('1º Número: '));
let num2 = Number(prompt('2º Número: '));
let soma = num1 + num2;
alert(soma)
--------------------------
const a = prompt('Coloque um numero para ser multiplicado ao dobro: ')
alert('O dobro deste número é: ' + a * 2)

var a = "20";
var b = a * 2; // b = 40;
var c = a / 2; // c = 10;
var d = a - 2; // d = 18
var e = parseInt(a) + 2; // e = 202 ???
console.log("e: " + e); // exibe o valor de uma variável
alert(a)
--------------------------------------
var fruta = "Banana";
var preco = 3.50;
var levar = true;
var novoValor;
alert(fruta + " " + preco + " " + levar + " " + novoValor)
*/