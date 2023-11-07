Algoritmo "calculo imc"
//
//
//
//
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 19/8/2023
Var
   // Seção de Declarações das variáveis
   peso, altura,imc: real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   escreva ("qual é o seu peso? ")
   leia (peso)
   escreva ("Qual a sua altura ? ")
   leia (altura)
   imc <- peso/(altura * altura)
   escreval ("Seu IMC é ", imc:5:2)

   se (imc > 18.5) e (imc < 24.9) entao
   escreva ("Seu IMC é está no peso ideal")
   senao
   escreval ("Seu imc não está no peso ideal")
   
   
   
   


      fimse
Fimalgoritmo



     // escreva ("Seu IMC é de magreza")
     
     // se (imc >= 18.5) e (imc < 24.9) entao
        // escreva ("Seu IMC é peso normal")