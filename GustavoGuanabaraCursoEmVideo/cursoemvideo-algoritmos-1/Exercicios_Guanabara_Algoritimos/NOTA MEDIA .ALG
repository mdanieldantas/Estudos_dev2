Algoritmo "nota media "
//
//
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 20/8/2023
Var
   // Se��o de Declara��es das vari�veis
   notaUm,notaDois,media: real

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...
   Escreval (" Esquecreva sua primeira nota: ")
   leia (notaUm)
   escreval(" Escreva sua segunda nota: ")
   leia (notadois)
   media <- (notaUm + notaDois)/2
   escreval ("A nota media do aluno �: ", media:4:2)
   //if
   se (media >= 7) entao
      Escreval ("Voc� est� aprovado!")
      //else
   sen�o
      // entre 5 e 7 recuperac�o
      se (media >= 5) e (media < 7) entao
         escreval ("Aluno em recuperac�o!")
      senao
         escreval ("Aluno reprovado!")


      fimse
   fimse
Fimalgoritmo