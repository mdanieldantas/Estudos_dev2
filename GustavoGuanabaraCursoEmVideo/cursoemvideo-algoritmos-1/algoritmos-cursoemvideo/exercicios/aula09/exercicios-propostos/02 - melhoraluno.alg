algoritmo "detectaCDF"
var
   tot, cont: Inteiro
   nome, melhorAluno: Caractere
   nota, maiorNota: Real
inicio
      Escreval("------------------------")
      Escreval(" Escola Santa Paciencia ")
      Escreval("------------------------")
      Escreva("Quantos alunos a turma tem? ")
      Leia(tot)
      cont <- 1
      Enquanto (cont <= tot) faca
         Escreval("---------------")
         Escreval("ALUNO ", cont)
         Escreva("Nome do aluno: ")
         Leia(nome)
         Escreva("Nota de ", nome, ": ")
         Leia(nota)
         Se (nota > maiornota) entao
            maiorNota <- nota
            melhorAluno <- nome
         FimSe
         cont <- cont + 1
      FimEnquanto
      Escreval("-------------------")
      Escreval("O melhor aproveitamento foi de ", melhorAluno, " com a nota ", maiorNota:3:1)
fimalgoritmo


Algoritmo "quantosAlunosATurmaTem?"
//
//
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 22/8/2023
Var
   // Seção de Declarações das variáveis
   tot, cont:inteiro
   nome, melhorAluno: caractere
   nota, maiorNota: Real
Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   escreval("---------------------")
   Escreval ("Escola Santa paciência")
   escreval("---------------------")
   escreva ("Quantos alunos a escola tem?")
   leia (tot)

   cont <- 1
   enquanto(cont <= tot)FACA
      escreval("----------------------")
      escrevaL ("Aluno ", cont)
      escreva ("Nome do Aluno: ")
      leia (nome)
      escreva ("Nota de ",nome,":")
      leia (nota)

      se (nota > maiorNota) entao
         maiorNota <- nota
         melhorAluno <- nome

      fimse
      cont <- cont +1
   fimEnquanto
   Escreval ("----------------------")
   escreval("O melhor aproveitamento foi de ", melhorAluno, "com nota ", maiorNota:3:2)



Fimalgoritmo
