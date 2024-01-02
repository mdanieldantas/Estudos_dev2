Algoritmo "numeroPrimo"
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 24/8/2023
Var
   // Seção de Declarações das variáveis
   c, n, contDiv :inteiro


Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   c <- 1
   contDiv <- 0
   escreva ("Digite um número:")
  // leia (n)
   repita
      escreva (c)
      se (n % c = 0) entao
         contDiv <- contDiv + 1
      fimse
      c <- c + 1
   ate (c > n)
   se (contDiv > 2) entao
      escreval(" O valor ",n, " não é primo!")
   senao
      Escreval (" O valor ",n, " é primo!")
   fimse
Fimalgoritmo