algoritmo "Creuza 02 converter Dollar"
// Função : converter Dollar
// Autor :
// Data : 12/08/2023
// Seção de Declarações
var
   r, d: real
   q,c: inteiro

inicio
   // Seção de Comandos
   // a variavel da conicão tem que ser colocada se não pode dar um looping infinito
   c <- 1
   escreval ("Quantas vezes você quer converter? ")
   leia (q)
   enquanto (c <= q)faca
      escreva ("Quantos reais eu tenho?")
      leia (r)
      d <- r/2.20
      //escreva na tela (xxx,variavel,  até 5 casas e 2 decimos)
      Escreval ("Posso ter", d:5:2)
      c <- c + 1
   FimEnquanto
fimalgoritmo
