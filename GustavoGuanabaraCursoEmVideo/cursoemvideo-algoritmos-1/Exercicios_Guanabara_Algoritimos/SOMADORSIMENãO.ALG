Algoritmo "somadorSimENão"
//
//
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 23/8/2023
Var
   // Seção de Declarações das variáveis

   n,cont,s:inteiro
   resp: caractere
Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   s <- 0

   repita
    (resp = "s") faca
      escreva ("digite o valor ==>")
      leia (n)
      s <- s + n
      escreva ("você quer continuar? [s/n]")
      leia (resp)
   ate ( resp = "n")
   Escreval ("A soma de todos os valores digitados é ", s)

Fimalgoritmo