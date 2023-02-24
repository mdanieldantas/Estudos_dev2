function CreatBook(title, author, pages) {

  this.title = title;
  this.author = author;
  this.pages = pages;

}
const book1 = new CreatBook('Atmic', 'james', 300)
const book2 = new CreatBook('100 anos', 'marira', 9393)

book1.color = 'white'

console.log(book1)
console.log(book2)





/*
function creatBook(title, author, pages) {
  const book = {
    title: title,
    author: author,
    pages: pages,
    printBook: function () {
      console.log('Printing...')
    }
  }
  return book
}
const book1 = creatBook('Atmic', 'james', 300)
const book2 = creatBook('100 anos', 'marira', 9393)

book1.color = 'white'

console.log(book1)
console.log(book2)


    bookChapters: {
      chap1: 'fundamentals',
      chap2: 'fist law',
    },


book.printBook()

function printBook() {
  console.log('printig...')
}
console.log(book)



i = 1

while (i <= + 10) {
  if (i === 8) break
  console.log('Numeo ', i)
  i++
}
const friends = ['marcos', 'ana', 'jose']

for (let i of friends)
  console.log(i, friends[i])
  
const myCar = {
  model: 'BMW',
  year: 2023,
  km: 6800
}
for (let i in myCar)
  console.log(i, myCar[i])

i = 1
do {
  console.log('Numero ', i)
  i++

} while (i <= 10)
i = 1

while (i <= + 10) {
  console.log('Numeo ', i)
  i++
}


// for ( vaiavel condição incremento)
for (i = 0; i <= 10; i++) {
  console.log('Numero ', i)
}


let siglasEstados = 'SP'

switch (siglasEstados) {
  case 'SP':
    console.log('São Paulo')
    break

  case 'CE':
    console.log('Ceará')
    break

}



let airportName = 'ACV'
switch (airportName) {
  case 'MCO':
    console.log('Orlando ')
    break

  case 'JFK':
    console.log('John F. Kennedy ')
    break

  case 'SEA':
    console.log('Seattle')
    break
  default:
    console.log('Unknown')
}
-----------------------------------
let driverSpeed = 40

if (driverSpeed > 110) {
  console.log('Driving too Fast ')
}

else if (driverSpeed > 40 && driverSpeed <= 110) {
  console.log('Ok')
}

else

  console.log('Driving too Slow')


let num1 = (3 + 4) * 2

console.log(num1)

let corCliente = undefined
let corEstoque = 'black'
let corVendida = corCliente || corEstoque

console.log(corVendida) 
let temidadeMinima = true
let temTituloDeEleitor = true

let podeVotar = temTituloDeEleitor && temidadeMinima

console.log(podeVotar)

let podeViajar = podeVotar
console.log('Pode viajar ' + podeViajar)


let driver = 120

let speed = driver > 110 ? 'Above' : 'Below'
console.log(speed)



let num1 = '1'
let num2 = 1
console.log(num1 === num2)


let num1 = 3
let num2 = 2
let total = num1 + num2
console.log(total++)
console.log(total)

let dia1 = 24
console.log(24 * 2 + 5)

objeto
let listaDeComprasx = {
}

//array
let agenda = [
]

// função
function celular() {
  console.log('sim é um celular')
}
celular()

----------------------------------------------
console.log('Java Script ok!');

let fistName = 'André';
let lastName = 'Iacono';
console.log(fistName);
console.log(lastName);

let corDosOlhos = 'azul';
console.log('A Cor dos olhos é: ' + corDosOlhos);

///let price = 30;
//price = 20;
const price = 30;
console.log(price);

// o Js coloca o ; de  forma automatica

-------------tipos de variaveis ---------------

tipos primitivos: String, number, boolean, underfined, null
//tipos primitivos: String, number, boolean, underfined, null

let itemName = 'Pen' // string (letras)
let itemPrice = 3 // Number, (numero)
let ItemAvailable = true // boolean, verdadeiro ou falso
let ItemColor = undefined // (indefinido)

console.log(typeof itemName)
console.log(typeof itemPrice)
console.log(typeof ItemAvailable)
console.log(typeof ItemAvailable)
console.log(typeof ItemColor)

--------------Tipos de Variaveis de Referência---------

Objeto 
é um grupo de informações referentes a uma coisa só, são as propriedades de um objeto.
ex:
let carro = {
  cor: 'Azul',
  preco: 200000,
  ano: 1987,
  dono: 'Carlos',
}
console.log(carro.dono)
console.log(carro)


let computador1 = {
  marca: 'Aplle',
  modelo: 'MacBook Pro a1286',
  ano: 'Início de 2011',
  processador: 'i7',
  ram: '16GB DDR3',
  tela: '15,4',
  sistemaOperacional: 'Mac OS Catalina 10.15.6',
  tipoDeUsb: '2.0'
}
console.log(computador1)


Array
é uma estrutura de dados que armazena uma lista ordenada de valores. Esses valores podem ser de diferentes tipos, como números, strings, objetos, entre outros. Em JavaScript, as arrays são criadas usando colchetes []
EX: 
let verdadeiro = 'amigo'
let agenda = ['Silvio', '23', verdadeiro, 'Alex']//string, number, object
agenda[3] = 'Francisco' // trocar um valor da array
console.log(agenda)
parseFloat(agenda[1])
console.log(parseInt(agenda[1]))
console.log(agenda[0])
console.log(typeof agenda[1])
console.log(agenda[1])

Funções
grupo de tarefas, instruções ou calculos que podemos criar, são miniprogramas
function saleStatus(status, total) {
  console.log('Transaction ' + status + '! Total amuount: ' + total)
}
saleStatus('Aproved', 30)
saleStatus()


Função que retorna um valor
function percentagem10(price) {
  return price - (price * 10 / 100)
}
console.log(percentagem10(40))

=====================TREINOS DE OBJETO E FUNÇÃO===============================
// uma array e objeto consultorio
let itensConsultorio = ['sofá', 'luminaria', 'mesa', 'ventilador']
itensConsultorio[3] = 'note'
console.log(itensConsultorio[2])
console.log(itensConsultorio[3])
// Como Criar uma função que receba dois números como argumento e retorne a soma dos dois
function soma(num1, num2) {
  return num1 + num2;
}
console.log(soma(5, 5))

// objeto consultório
let consultorio = {
  nome: 'Lumiar',
  endereco: 'Rua Tiburcio Frota 890',
  especialidade: 'psi',
  colaboradores: {
    João: 'Dentista',
    Mário: 'Oculista',
    Everardo: 'Psicologia'
  },
  aparelhos: [
    'sofá', 'vantilador', 'mesa', 'caderno'
  ]
};
console.log(consultorio.colaboradores)
console.log(consultorio.endereco)
console.log(consultorio.aparelhos)

//objeto carro
let carro = {
  marca: 'Gol',
  ano: 1987,
  modelo: 'sedan'
}
console.log('Este carro é um ' + carro.marca + ', ' + carro.modelo + ' de ' + carro.ano + '.')
console.log(carro.ano)

// Objeto livro:
let livro = {
  titulo: "Rider",
  autor: 'Dante',
  paginas: '200',
}
console.log("Este livro foi escrito por " + livro.autor)
console.log('O livro ' + livro.titulo + ' escrito por ' + livro.autor + ' tem ' + livro.paginas + ' páginas.')

// Crie um, objeto pessoa que armazene informações como nome, idade e profissão. Adicione um método que imprima todas as informações da pessoa.
let pessoa = {
  nome: 'Anderson',
  idade: 30,
  profissão: 'Dev',
  imprimir: function () {
    console.log('\nNome: ' + this.nome);
    console.log('\nIdade: ' + this.idade);
    console.log('\nProfissão : ' + this.profissão);
  }
};
pessoa.imprimir()
*/