
algoritmo "ParOuImparProcedimento"
// =============================================================
// Algoritmo para verificar se um valor e par ou impar usando
// rotinas internas.
//
// AUTOR: Gustavo Guanabara
// Curso COMPLETO disponivel GRATIS no site www.cursoemvideo.com
// =============================================================

var
n: inteiro

procedimento ParOuImpar(V: Inteiro)
inicio
se(v%2 = 0) entao
escreval ("O número ", v, " é par")
senao
escreval ("O número ", V, " é impar")
fimse
fimprocedimento

inicio

escreva ("Digite um número: ")
leia (n)
ParOuImpar(n)

fimalgoritmo

