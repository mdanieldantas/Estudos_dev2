Algoritmo "fatorial"
//
//
//
//
// Descrição   : contagem regressiva de numero até 1

// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 23/8/2023
Var
   // Seção de Declarações das variáveis
   c, n, f: inteiro
    r: caractere
Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
repita
   escreva ("Digite um numero: ")
   Leia (n)
   // v.c recebe v.n que é o numero digitado
   c <- n
   f <- 1
   repita
      // colocar o c dentro do loop repita
      escreva (c,"x")
      f <- f * c
      c <- c - 1
   ate (c < 1)
   escreval (" o valor do fatorial de", n, " é igual a ", f)
   escreval ("Quer continuar? [s/n]")
   leia (r)
  ate(r = "n")

Fimalgoritmo