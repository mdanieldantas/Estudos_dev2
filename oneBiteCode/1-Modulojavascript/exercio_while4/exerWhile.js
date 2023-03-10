const nomeTurista = prompt('Qual é o seu nome? ')
let cidadesVisitadas = ""
let contagem = 0

let continuar = prompt('Você já visitou alguma cidade? (Sim/Não)')

// processamento

while (continuar.toLocaleUpperCase() === "Sim") {
  let cidadePergunta = prompt('qual é o nome da cidade visitada? ')
  //cidades visitadas + ...
  cidadesVisitadas += '-' + cidadePergunta + '\n'
  contagem++
  continuar = prompt('Você visitou alguma outra cidade? (Sim/Não)')
}
alert(`
Turista: ${nomeTurista}.
Cidades Visitadas: ${cidadesVisitadas}.
Quantidade de cidades visitadas: ${contagem}.
  `)