Algoritmo "SuperContador"
//
//
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 24/8/2023
Var
   // Seção de Declarações das variáveis
   cont, n,op : inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   repita
      escreval ("--------------- ")
      escreval ("|     MENU     |")
      escreval ("--------------- ")
      EscrevaL("| [1] De 1 a 10 |")
      EscrevaL("| [2] De 10 a 1 |")
      EscrevaL("| [3] Sair      |")
      EscrevaL("=================")
      leia (op)
      escolha(op)

      caso 1
         repita
            escreva (cont, "..")
            cont <- cont +1
         ate (cont > 10)
      caso 2
         cont <- 10
         repita
            escreva (cont, "..")
            cont <- cont -1
         ate (cont < 1)
      caso 3
         EscrevaL("SAINDO...")
      caso 4
         EscrevaL("INVALIDO!")
      fimescolha
   Ate (op = 3)
Fimalgoritmo