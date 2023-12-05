
function fibonacciGenerator(n) {
  // [0,1,1]
  let output = []

  // se n for igual a 1 saída 0
  if (n === 1) {
    output = [0]
    // se n for igual a 2 em tipo e tamanho saída 0, 1
  } else if (n === 2) {
    output = [0, 1]
    // se não 
  } else {
    output = [0, 1]

    for (let i = 2; i < n; i++) {
      output.push(output[output.length - 2] + output[output.length - 1])
    }

  }

  return output

}
console.log(fibonacciGenerator(100))


/*
os dois primeiros numeros da sequência devem ser 0 e 1.

  for (let i = 0; i < 1000; i++) {

  }

  

    if (n === output.length) {

    } else {
      output.push(output[output.length - 2] + output[output.length - 1])
    }



*/