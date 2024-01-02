Algoritmo "contarde1a10"
//
//
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 23/8/2023
Var
   // Seção de Declarações das variáveis
   cont, n, r, ninserido: inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   // contador recebe 1
   cont <- 1
   // escreva na tela
   escreval ("Qual número você deseja saber a tabuada?")
   // leia
   leia (ninserido)
   // v.n recebe ninserido
   n <- ninserido
   // (do) faca
   repita
   // v.r recebe v.n * v.cont
       r <- n * cont
      escreval (n,"x", cont, "=",r)
      cont <- cont + 1
      //(while) faca enquanto o a v.contador for maior que dez
   ate (cont>10)

Fimalgoritmo