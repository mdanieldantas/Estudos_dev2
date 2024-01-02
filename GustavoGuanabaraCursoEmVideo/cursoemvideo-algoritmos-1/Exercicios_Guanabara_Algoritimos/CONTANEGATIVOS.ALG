Algoritmo "contaNegativos"
//
//
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 23/8/2023
Var
   // Seção de Declarações das variáveis
n,c,totn: inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
      c<-1
      totn<-0
      repita
      escreva("Digite um numero")
      leia (n)
      se (n<0)então
      totn <- totn + 1
      fimse
      c <- c +1
      ate (c>5)
      
      escreval (" Foram digitados ",totn," negativos")
Fimalgoritmo