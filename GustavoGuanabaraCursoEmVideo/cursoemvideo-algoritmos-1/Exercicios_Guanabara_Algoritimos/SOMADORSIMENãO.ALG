Algoritmo "somadorSimEN�o"
//
//
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 23/8/2023
Var
   // Se��o de Declara��es das vari�veis

   n,cont,s:inteiro
   resp: caractere
Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...
   s <- 0

   repita
    (resp = "s") faca
      escreva ("digite o valor ==>")
      leia (n)
      s <- s + n
      escreva ("voc� quer continuar? [s/n]")
      leia (resp)
   ate ( resp = "n")
   Escreval ("A soma de todos os valores digitados � ", s)

Fimalgoritmo