Algoritmo "parOuImparProcedimento"
//
//
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 28/8/2023
Var
   // Se��o de Declara��es das vari�veis
   n:inteiro

procedimento parOuImpar(v:inteiro)
inicio
   se (v%2=0) entao
      escreval ("O n�mero ", v, " � PAR")
   senao
      escreval ("O n�mero ", v," � IMPAR")
   fimse
  fimprocedimento
Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   escreva ("Digite um n�mero: ")
   leia (n)
   ParOuImpar(n)
Fimalgoritmo