let velocidade = 80
while (velocidade > 0) {
  alert("O carrro está a " + velocidade + "km/h")
  velocidade -= 20
  alert("Diminuindo 20 Km/h")
  if (velocidade == 20) {
    break
  }
}
alert("O carro parou.")