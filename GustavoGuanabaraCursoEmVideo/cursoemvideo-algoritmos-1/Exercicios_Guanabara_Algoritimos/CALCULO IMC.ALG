Algoritmo "calculo imc"
//
//
//
//
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 19/8/2023
Var
   // Se��o de Declara��es das vari�veis
   peso, altura,imc: real

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...
   escreva ("qual � o seu peso? ")
   leia (peso)
   escreva ("Qual a sua altura ? ")
   leia (altura)
   imc <- peso/(altura * altura)
   escreval ("Seu IMC � ", imc:5:2)

   se (imc > 18.5) e (imc < 24.9) entao
   escreva ("Seu IMC � est� no peso ideal")
   senao
   escreval ("Seu imc n�o est� no peso ideal")
   
   
   
   


      fimse
Fimalgoritmo



     // escreva ("Seu IMC � de magreza")
     
     // se (imc >= 18.5) e (imc < 24.9) entao
        // escreva ("Seu IMC � peso normal")