Algoritmo "parOuImparProcedimento"
//
//
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 28/8/2023
Var
   // Seção de Declarações das variáveis
   n:inteiro

procedimento parOuImpar(v:inteiro)
inicio
   se (v%2=0) entao
      escreval ("O número ", v, " é PAR")
   senao
      escreval ("O número ", v," é IMPAR")
   fimse
  fimprocedimento
Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...

   escreva ("Digite um número: ")
   leia (n)
   ParOuImpar(n)
Fimalgoritmo