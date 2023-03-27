const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]

//console.log(arr)

// adiconar elementos
//.push() - adiciona elemento no final do array

//arr.push('Boromir')
//console.log(arr)

//.unshift() - insere valor tanto no final como no inicio do array

//arr.unshift('Boromir')
//console.log(arr)

// remover o ultimo elemento do array e devovle ele
//.pop()

//const ultimoElemento = arr.pop()
//console.log(arr)
//console.log(ultimoElemento)

// pesquisar por um elemento 
//.includes()

//const inclui = arr.includes("Gandalf")
//console.log(inclui)


// .indexof - descobre se está ou não incluso e quala posição ele 

//const indice = arr.indexOf('Gandalf')
//console.log(indice)

// cortar e concatenar o array
// .slice

const hobbits = arr.slice(0, 4)
const outros = arr.slice(-4)
console.log(arr)
console.log(hobbits)
console.log(outros)