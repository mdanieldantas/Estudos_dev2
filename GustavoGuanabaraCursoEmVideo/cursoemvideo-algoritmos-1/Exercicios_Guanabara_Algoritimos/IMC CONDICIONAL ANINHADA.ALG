Algoritmo "imc condicional aninhada"
//
//
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 20/8/2023
Var
   // Seção de Declarações das variáveis
   m,a,imc:Real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   escreval ("Bem vindo a calcula de IMC (Kg/ m2)!")
   escreva ("Massa (kg): ")
   Leia (m)
   escreva ("Altura (m): ")
   leia (a)
   imc <- m/(a * a)
   escreval ( "imc: ", IMC: 5:2)

   se (imc < 18.5) então
      escreva ("Baixo peso")
   senao
      se(imc >= 18.5) e  (imc <= 24.9) entao
         escreval ("Intervalo normal.")
      senao
         se (imc >= 25) e (imc <=29.9) entao
            escreval ("Sobrepeso.")
         senao
            se (imc >= 30) e (imc <=34.9) entao
               escreval ("Obesidade classe 1.")
            senao
               se (imc >= 35) e (imc <=39.9) entao
                  escreval ("Obesidade classe 2.")
               senao
                  se (imc >= 40) entao
                     escreval ("Obesidade classe 3.")
                  fimse
               fimse
            fimse
         fimse
      fimse
   fimse
Fimalgoritmo
//else , if, &&, }