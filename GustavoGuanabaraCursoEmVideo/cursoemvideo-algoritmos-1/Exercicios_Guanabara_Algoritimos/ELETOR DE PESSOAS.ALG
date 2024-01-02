Algoritmo "ELETOR DE PESSOAS""
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 25/8/2023
Var
   // Seção de Declarações das variáveis
   sex,resp :caractere
   id, cabelo, totH, totM: inteiro


Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   repita
      limpatela
      escreval ("==================")
      escreval ("SELETOR DE PESSOAS")
      escreval ("==================")
      escreval ("Qual o sexo? [h/m]")
      leia (sex)
      escreval ("Qual a idade?")
      leia (id)
      escreval ("Qual a cor do cabelo?")
      escreval ("------------------")
      escreval("[1] Preto.")
      escreval("[2] Castanho.")
      escreval("[3] Loiro.")
      escreval("[4] Ruivo.")
      leia (cabelo)
      se ( sex = "h") e (id >=18 ) e (cabelo = 2) entao
         totH <-  totH + 1
      fimse

      se (sex = "f") e (( id >= 25) e (id <=30 ))  e (cabelo = 3)entao
         totM  <- totM + 1
      fimse

      escreval ("Quer continuar?[s/n]")
      leia (resp)
   ate (resp = "n")

   escreval ("Total de HOMENS com mais de 18 ANOS e cabelos CASTANHOS é de: ", TotH, ".")
   escreval ("Total de MULHERES entre 25 e 30 ANOS e cabelos LOIROS: ",totM, ".")
Fimalgoritmo