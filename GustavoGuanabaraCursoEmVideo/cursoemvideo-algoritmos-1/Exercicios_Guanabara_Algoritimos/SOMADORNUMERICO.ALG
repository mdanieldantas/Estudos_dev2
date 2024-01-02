Algoritmo "somadorNumerico"
// 
//  
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 22/8/2023
Var
// Seção de Declarações das variáveis 
      cont, n,s, maior: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
        // contatodor recebe 1
        cont <- 1
        // s recebe 0
        s <- 0
        //while  (condicão)
        enquanto (cont <= 3) faca
        // escreva na tela
        escreva ("digite o ", cont, "o. valor: ")
        //leia
        leia (n)
        se (n > maior) entao
        maior <- n
        fimse
        s <- cont s + n
        cont <- cont + 1
        fimenquanto
        escreval ( "A soma dos valores foi ", s )
        escreval ("o maior valor digitado foi: ", maior)

Fimalgoritmo