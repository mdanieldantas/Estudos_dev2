Algoritmo "fatorial"
//
//
//
//
// Descri��o   : contagem regressiva de numero at� 1

// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 23/8/2023
Var
   // Se��o de Declara��es das vari�veis
   c, n, f: inteiro
    r: caractere
Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...
repita
   escreva ("Digite um numero: ")
   Leia (n)
   // v.c recebe v.n que � o numero digitado
   c <- n
   f <- 1
   repita
      // colocar o c dentro do loop repita
      escreva (c,"x")
      f <- f * c
      c <- c - 1
   ate (c < 1)
   escreval (" o valor do fatorial de", n, " � igual a ", f)
   escreval ("Quer continuar? [s/n]")
   leia (r)
  ate(r = "n")

Fimalgoritmo