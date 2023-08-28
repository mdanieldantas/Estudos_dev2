Algoritmo "QuantosEntre0e10Par"
//
//
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 26/8/2023
Var
   // Seção de Declarações das variáveis

   c, v, tot10, simp: inteiro
Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   tot10 <- 0
   para c <- 1 ate 6 faca
      escreva ("Digite um valor: ")
      leia (v)
      se ( v >= 0) e ( v <= 10)  entao
      tot10 <- tot10 + 1
      se (v%2=1) entao
      simp <- simp + v
      fimse
      fimse
   fimpara
   escreval ("O total de números até 10 são: ", tot10)
   escreval ("Total de numero impar é: " , simp)
Fimalgoritmo