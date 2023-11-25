let score = Math.random() * 100
score = Math.floor(score + 1)

if ((score > 80) && (score < 100)) {
  console.log("Seu grau de semelhança é acima da media " + score + "%.")
} else {
  console.log("Seu grau de semelhança é de: " + score + "%.")
}