let output = []
let count = 1



function fizzBuz() {
  while (count <= 100) {
    if (count % 3 === 0 && count % 5 === 0) {
      output.push("FizzBuz")
    }
    if (count % 3 === 0) {
      output.push("Fizz")
    } else if (count % 5 === 0) {
      output.push("Buz")
    } else {
      output.push(count)
    }
    count++
  }
  console.log(output)
}
fizzBuz()