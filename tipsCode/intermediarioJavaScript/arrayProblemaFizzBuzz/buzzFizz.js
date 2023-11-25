let output = []
let count = 1



function fizzBuz() {
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
  console.log(output)
}

fizzBuz()
fizzBuz()
fizzBuz()
fizzBuz()
fizzBuz()
fizzBuz()
fizzBuz()
fizzBuz()
fizzBuz()
fizzBuz()
fizzBuz()
fizzBuz()
fizzBuz()
fizzBuz()
fizzBuz()
fizzBuz()
fizzBuz()
fizzBuz()
fizzBuz()
fizzBuz()
fizzBuz()
fizzBuz()
fizzBuz()
fizzBuz()
fizzBuz()
fizzBuz()
fizzBuz()
fizzBuz()
fizzBuz()
fizzBuz()
//output.push(1, 2, 3)
//remove o ultimo
//output.pop(1)