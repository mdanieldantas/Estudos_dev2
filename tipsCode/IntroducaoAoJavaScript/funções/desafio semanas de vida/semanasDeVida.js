function espectativaDeVida(idade) {

  let anosRestantes = 90 - idade
  let dias = anosRestantes * 365
  let semanas = anosRestantes * 52
  let meses = anosRestantes * 12

  console.log(`Você tem ${dias} dias, ${semanas} semanas e ${meses} meses restantes.`)
}
espectativaDeVida(56)