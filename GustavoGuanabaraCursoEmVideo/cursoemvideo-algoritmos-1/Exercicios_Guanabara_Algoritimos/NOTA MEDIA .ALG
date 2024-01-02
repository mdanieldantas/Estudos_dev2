Algoritmo "nota media "
//
//
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 20/8/2023
Var
   // Seção de Declarações das variáveis
   notaUm,notaDois,media: real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval (" Esquecreva sua primeira nota: ")
   leia (notaUm)
   escreval(" Escreva sua segunda nota: ")
   leia (notadois)
   media <- (notaUm + notaDois)/2
   escreval ("A nota media do aluno é: ", media:4:2)
   //if
   se (media >= 7) entao
      Escreval ("Você está aprovado!")
      //else
   senão
      // entre 5 e 7 recuperacão
      se (media >= 5) e (media < 7) entao
         escreval ("Aluno em recuperacão!")
      senao
         escreval ("Aluno reprovado!")


      fimse
   fimse
Fimalgoritmo