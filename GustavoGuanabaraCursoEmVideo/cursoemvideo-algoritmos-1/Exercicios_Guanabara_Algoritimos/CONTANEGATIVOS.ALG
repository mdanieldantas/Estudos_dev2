Algoritmo "contaNegativos"
//
//
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 23/8/2023
Var
   // Se��o de Declara��es das vari�veis
n,c,totn: inteiro

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...
      c<-1
      totn<-0
      repita
      escreva("Digite um numero")
      leia (n)
      se (n<0)ent�o
      totn <- totn + 1
      fimse
      c <- c +1
      ate (c>5)
      
      escreval (" Foram digitados ",totn," negativos")
Fimalgoritmo