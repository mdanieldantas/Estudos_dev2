Algoritmo "ELETOR DE PESSOAS""
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 25/8/2023
Var
   // Se��o de Declara��es das vari�veis
   sex,resp :caractere
   id, cabelo, totH, totM: inteiro


Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...
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
      EscrevaL("[1] Preto")
      EscrevaL("[2] Castanho")
      EscrevaL("[3] Loiro")
      EscrevaL("[4] Ruivo")
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

   escreval ("Total de HOMENS com mais de 18 ANOS e cabelos CASTANHOS � de: ", TotH, ".")
   escreval ("Total de MULHERES entre 25 e 30 ANOS e cabelos LOIROS: ",totM, ".")
Fimalgoritmo