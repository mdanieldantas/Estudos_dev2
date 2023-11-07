Algoritmo "pessoaMaisPesadaRotinas"
//
//
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 28/8/2023
Var
   // Seção de Declarações das variáveis
   i: inteiro
   n, pesado: caractere
   p, mai:real

procedimento topo()
inicio
   Limpatela
   escreval ("--------------------------------")
   escreval ("D E T E C T O R  DE  P E S A D O")
   escreval ("Maior peso até agora: ", mai, "kg")
   escreval ("--------------------------------")

fimprocedimento

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   topo()

   para i <- 1 ate 5 faca
      escreva ("Digite nome: ")
      leia (n)
      Escreva ("Digite o peso de ", n, ":")
      leia (p)

      se (p>mai)entao
         mai <- p
         pesado <- n
      fimse
      topo()
   fimpara
   topo()
   escreval ("A pessoa mais pesada foi ", pesado,", com ", mai, " quilos.")



Fimalgoritmo