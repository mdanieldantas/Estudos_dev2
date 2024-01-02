algoritmo "detectaCDF"
var
// nomeada as variaveis em nome, tipo e o valor vai ser dado no iicio
   tot, cont: Inteiro
   nome, melhorAluno: Caractere
   nota, maiorNota: Real
inicio
      Escreval("------------------------")
      Escreval(" Escola Santa Paciencia ")
      Escreval("------------------------")
      Escreva("Quantos alunos a turma tem? ")
      Leia(tot)
      // variavel cont recebe 1
      cont <- 1
      //while (condicão V. contador for meno ou igual a V.) faca
      // ele executa esse bloco inteiro de código
      Enquanto (cont <= tot) faca
         Escreval("---------------")
         Escreval("ALUNO ", cont)
         Escreva("Nome do aluno: ")
         Leia(nome)
         Escreva("Nota de ", nome, ": ")
         Leia(nota)
         //if (condicão boleana V.nota for maior que v.maiorNota) então
         Se (nota > maiornota) entao
         // v.maiornota recebe v nota
            maiorNota <- nota
            // vmelhorAluno recebe nome
            melhorAluno <- nome
         FimSe
         cont <- cont + 1
      FimEnquanto
      Escreval("-------------------")
      Escreval("O melhor aproveitamento foi de ", melhorAluno, " com a nota ", maiorNota:3:1)
fimalgoritmo