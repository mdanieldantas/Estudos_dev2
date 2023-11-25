/*
calImc()
function calImc(peso, altura) {
  let peso = parseFloat(prompt(`Qual seu peso? `))
  let altura = parseFloat(prompt(`Qual sua altura? `))
  let imc = peso / (altura * altura);
  let imcArredondado = parseFloat(imc.toFixed(2));
  if (imcArredondado < 18.5) {
    alert(`Seu IMC é de ${imcArredondado}, então você está fraco.`)

  } else if (imcArredondado >= 18.5 && imcArredondado < 24.9) {
    alert(`Seu IMC é ${imcArredondado}, então você tem um peso normal.`)
  } else {
    alert(`Seu IMC é ${imcArredondado}, então você está com sobrepeso.`)
  }
}

*/


function calImc(peso, altura) {
  // let peso = prompt(`Qual seu peso? `)
  // let altura = prompt(`Qual sua altura?`)
  let imc = peso / (altura * altura);
  let imcArredondado = parseFloat(imc.toFixed(2));
  if (imcArredondado < 18.5) {
    console.log(`Seu IMC é de ${imcArredondado}, então você está fraco.`)

  } else if (imcArredondado >= 18.5 && imcArredondado < 24.9) {
    console.log(`Seu IMC é ${imcArredondado}, então você tem um peso normal.`)
  } else {
    console.log(`Seu IMC é ${imcArredondado}, então você está com sobrepeso.`)
  }

}
calImc(2, 1.80)