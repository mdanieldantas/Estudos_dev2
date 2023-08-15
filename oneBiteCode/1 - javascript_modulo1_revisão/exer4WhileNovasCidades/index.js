/*

calculadora de salario liquido

regras do inss 
regras do imposto de renda


Estruras condicionais (If (Se),Else If (Se não se),Else e  Switch - Case (Chavear)).
Estruturas de repetição (For (para), While (Enquanto), Do (faça),Do While (faça enquanto).
Operadores + - * / %
== === != !=== >= <=
&&(and) || (ou) !(not ele modifica o que estiver do lado dele e transforma pra falso)


################## Visitando Novas Cidades ##################

Escreva um programa em javascript que peça o nome de um turista

e então pergunte se ele já visitou alguma cidade. 

Caso a resposta seja sim, 
pergunte o nome da cidade e o armazene em uma variável, 

e então continue perguntando  (loop)

se o turista visitou alguma outra cidade até que a resposta seja não. 

No fim, o programa deve exibir o nome do turista, 
quantas 
e quais cidades ele visitou.

###############################################################


PROCESSAMENTO (comando)
pedir nome do turista
perguntar se ele já visitou uma cidade ( retorna sim/não)

Loop {
If(SE) !visitou == sim {
Pergunta qual cidade = nomedacidade  [valor do contador]
contador ++
}

Else(Se não) = não {
  Sair do loop
}
}

mostrar saidas


ENTRADA
Nome do turista - "String"
visitou? - String "sim/não" 
val visitou = visitouString == "sim"
Nome da cidade - Array de strings


SAÍDA
Nome do turista
Quantidade de cidades ele visitou 
Quais cidades ele visitou
contador de quantidade de cidades

------------------------------------------------------------------

PROCESSAMENTO (comando)
pedir nome do turista


Loop {
perguntar se ele já visitou uma cidade ( retorna sim/não)  
If(SE) !visitou { parar o loop}
Pergunta qual cidade = nomedacidade  [valor do contador]
contador ++ 
}

mostrar saidas

--------------------------------------------------------------------



*/

const nomeTurista = prompt('Qual é o seu nome? ')
let cidades = ""
let contagem = 0

let continuar = prompt('Você viajou para alguma cidade? Responda: (Sim/Não)')

while (continuar === "Sim") {
  let cidade = prompt("Qual é  o nome da cidade visitada? ")
  cidades += " - " + cidade + "\n"
  contagem++
  continuar = prompt("Você visitou alguma outra cidade? (Sim/Não)")
}

alert(
  "Turista: " + nomeTurista +
  "\nQuantidade de cidades visitadas: " + contagem +
  "\nCidades visitadas: \n" + cidades
)

