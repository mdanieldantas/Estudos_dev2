algoritmo "Creuza 02 converter Dollar"
// Fun��o : converter Dollar
// Autor :
// Data : 12/08/2023
// Se��o de Declara��es
var
   r, d: real
   q,c: inteiro

inicio
   // Se��o de Comandos
   // a variavel da conic�o tem que ser colocada se n�o pode dar um looping infinito
   c <- 1
   escreval ("Quantas vezes voc� quer converter? ")
   leia (q)
   enquanto (c <= q)faca
      escreva ("Quantos reais eu tenho?")
      leia (r)
      d <- r/2.20
      //escreva na tela (xxx,variavel,  at� 5 casas e 2 decimos)
      Escreval ("Posso ter", d:5:2)
      c <- c + 1
   FimEnquanto
fimalgoritmo
