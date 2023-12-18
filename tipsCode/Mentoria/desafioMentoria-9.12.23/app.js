/*
Faça um site que receba o salário base de um funcionario, 
calcule e mostre o salário a receber, 
sabendo-se que o funcionário tem gratificação de 5% sobre o salário base e paga imposto de 7% sobre este salário.


*/

//let salarioBase = parseFloat(salarioBase)


document.getElementById(`button`).addEventListener(`click`, function () {
  //alert(`tá pegando`)

  let salarioBase = Number(document.getElementById(`salarioBase`).value)
  console.log(salarioBase)
  let salarioGratificacao = salarioBase * 5 / 100
  let imposto = salarioBase * 7 / 100
  let salarioFinal = (salarioBase + salarioGratificacao) - imposto

  alert(salarioFinal)


})

