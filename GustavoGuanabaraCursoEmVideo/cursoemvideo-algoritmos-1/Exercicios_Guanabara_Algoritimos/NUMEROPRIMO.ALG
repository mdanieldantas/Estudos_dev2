Algoritmo "numeroPrimo"
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 24/8/2023
Var
   // Se��o de Declara��es das vari�veis
   c, n, contDiv :inteiro


Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...
   c <- 1
   contDiv <- 0
   escreva ("Digite um n�mero:")
  // leia (n)
   repita
      escreva (c)
      se (n % c = 0) entao
         contDiv <- contDiv + 1
      fimse
      c <- c + 1
   ate (c > n)
   se (contDiv > 2) entao
      escreval(" O valor ",n, " n�o � primo!")
   senao
      Escreval (" O valor ",n, " � primo!")
   fimse
Fimalgoritmo