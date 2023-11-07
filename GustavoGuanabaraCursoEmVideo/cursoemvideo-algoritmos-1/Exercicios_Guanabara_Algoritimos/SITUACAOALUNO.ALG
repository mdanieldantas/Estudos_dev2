algoritmo "SituacaoAluno"
var
   nota1, nota2, media: Real
inicio
   EscrevaL("-----------------------")
   EscrevaL(" ESCOLA BOI GORDO ")
   EscrevaL("-----------------------")
   Escreva("Primeira Nota: ")
   Leia(nota1)
   Escreva("Segunda Nota: ")
   Leia(nota2)
   media <- (nota1 + nota2)/2
   EscrevaL("-----------------------")
   EscrevaL(" MEDIA: ", media:3:1)



   se(media<= 10) e (media>= 9)entao
      escreval ("Sua clasificacão é (A)")

   senao
      se(media <= 7) e (media >= 8) entao
         escreval ("Sua clasificacão é (B)")

      senao
         se(media <= 6) e (media >= 7)  entao
            escreval ("Sua clasificacão é (c)")

         senao
            se(media <= 5) e (media >= 6) entao
               escreval ("Sua clasificacão é (d)")

            senao
               se(media <= 4) e (media >= 5)  entao
                  escreval ("Sua clasificacão é (E)")

               senao
                     escreval ("Sua clasificacão é (F)")

                  fimse
               fimse
            fimse
         fimse
      fimse

Fimalgoritmo