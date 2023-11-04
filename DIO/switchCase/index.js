let fruta = "morango"


switch (fruta) {
  case "Laranja":
    console.log("suco de laranja")
    break
  case "banana":
  case "morango":
    console.log("vitamina");
    break
  case "maça":
    console.log("suco de maçã")
    break
  default:
    console.log("suco generico")
}