
console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
// obj1['nome'] = 'Bola2'
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function () {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()



/*
--------notação ponto---------
A notação ponto em JavaScript é uma forma de acessar propriedades e métodos de um objeto. Ela consiste em escrever o nome do objeto seguido de um ponto e o nome da propriedade ou método que deseja acessar. Por exemplo:
let car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020
};

console.log(car.brand); // output: Toyota


-----------"hoisting"---------------------
O "hoisting" é um comportamento padrão do JavaScript que consiste em mover a declaração de variáveis para o topo de seu escopo, independentemente de onde elas sejam realmente inicializadas no código. Isso significa que, mesmo que você declare uma variável no meio do seu código, ela será "levantada" para o início do seu escopo. Isso pode criar situações de ambiguidade e resultar em erros, por isso é importante entender o funcionamento do hoisting e evitar problemas com sua utilização.
O hoisting é um comportamento padrão do JavaScript que consiste em mover a declaração de uma variável para o topo do seu escopo. Para evitar o hoisting, você pode utilizar o let ou o const ao invés da palavra-chave var para declarar suas variáveis. Isso limita o escopo da variável ao bloco em que é declarada e impede que ela seja "içada" para o topo do escopo. Além disso, evite a declaração de variáveis dentro de loops ou condicionais sem usar o let ou o const, pois isso pode levar a resultados inesperados devido ao hoisting.
-------------for-----------
O for é uma estrutura de repetição em JavaScript que permite repetir a execução de um trecho de código várias vezes, enquanto uma determinada condição é verdadeira. A sintaxe básica de um laço de repetição for em JavaScript é:
for (início; condição; incremento) {
  // código a ser executado
}

início é a expressão executada uma vez no início do laço antes de iniciar a primeira iteração.
condição é uma expressão avaliada antes de cada iteração, e se for verdadeira, o código dentro do laço é executado. Se for falsa, o laço é encerrado.
incremento é uma expressão executada no final de cada iteração antes de avaliar a condição novamente.
O laço for é usado para iterar sobre um conjunto de valores, como arrays ou objetos, ou para repetir uma série de instruções até que uma determinada condição seja satisfeita.
--------------var----------------------
As formas mais seguras de declarar variáveis em JavaScript são:

let: permite a reatribuição de valores e tem escopo de bloco, o que significa que a variável é visível apenas dentro do bloco onde foi declarada.

const: permite a atribuição de valor apenas uma vez e tem escopo de bloco, o que significa que a variável é imutável dentro do bloco onde foi declarada.

Ambas as formas let e const são mais seguras e recomendadas do que a antiga forma var, pois evitam problemas com a declaração de variáveis globais sem querer e ajudam a manter o escopo de variáveis claro e organizado.

-------------FUNÇÃO-------------------------
var francisco = 'cchico'
function saudacao(nome) {
  return 'olá, ' + nome + '!';
}
let mensagem = saudacao(`carlos, maria, junior, ${francisco} `);
console.log(mensagem)


Para criar uma função em JavaScript, você deve seguir os seguintes passos:
Declare a função: utilize a palavra-chave "function" seguida pelo nome da função e parênteses.
function nomeDaFuncao() {
  // corpo da função
}
Defina os parâmetros da função (opcional): você pode adicionar parâmetros entre os parênteses, separados por vírgula.
function nomeDaFuncao(parametro1, parametro2) {
  // corpo da função
}
Escreva o corpo da função: dentro das chaves, escreva o código que a função deve executar.
function nomeDaFuncao(parametro1, parametro2) {
  // código a ser executado
  let resultado = parametro1 + parametro2;
  return resultado;
}
Chame a função: para executar a função, você precisa chamá-la pelo seu nome seguido de parênteses e, se necessário, passar os argumentos.
let resultado = nomeDaFuncao(10, 20);
console.log(resultado); // 30


Uma função é uma ação ela executa um processo baseado na sentença de código,  um bloco de codigo nomeado, você pode reutilizar ela, Sim, uma função em JavaScript é como um mini-programa que pode ser invocado várias vezes no seu código. Ele tem um conjunto de instruções que são executadas quando a função é invocada, o que permite que você agrupe uma série de tarefas e as reutilize em diferentes partes do seu código. Isso torna seu código mais organizado e fácil de manter.

// Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 10, 4, 5, 6, 7, 8)
imprimirSoma()

// Funcao com retorno
function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())


--------------------undefined-----------------------------

Em JavaScript, "undefined" significa que uma variável foi declarada, mas ainda não foi inicializada ou atribuída a um valor. Por exemplo:
let x;
console.log(x); // Output: undefined
Já o "null", é um valor explícito que significa ausência de valor. É comumente usado para inicializar uma variável que deve representar um objeto não existente ou não disponível. Por exemplo:
let x = null;
console.log(x); // Output: null
Em ambos os casos, "undefined" e "null" são valores especiais que indicam que a variável não possui um valor válido.
---------------------------------objeto------------------
// forma 1 de criar objeto

const prod1 = {}
prod1.nome = 'celular ultra mega'
prod1.preco = 4998.90
prod1['desconto legal'] = 0.40
console.log(prod1)

// forma dois de criar objeto

const prod2 = {
    nome: 'Camisa polo',
    preco: 79.90,
    desconto: 40,
    altura: 20,
    Object: {
        blavla: 2,
    }
}
console.log(prod2)

const car = {
  make: 'Toyota',
  model: 'Camry',
  year: 2020,
  color: 'red',
  getInfo: function() {
    return `Make: ${this.make} \nModel: ${this.model} \nYear: ${this.year} \nColor: ${this.color}`;
  }
};

console.log(car.getInfo());
// Make: Toyota 
// Model: Camry 
// Year: 2020 
// Color: red

Neste exemplo, criamos um objeto chamado "car" que tem 5 propriedades: make, model, year, color, e getInfo. A propriedade getInfo é uma função que retorna uma string contendo informações sobre o carro. Quando chamamos console.log(car.getInfo());, imprimimos essas informações na tela.

{} parde chaves representa um objeto no caso vazio const prod1 = {} // parde chaves representa um objeto no caso vazio
o objeto em Js é uma coleção de chave valor
Em JavaScript, um objeto é uma coleção de propriedades e métodos que podem ser acessados ​​e modificados dinamicamente. Cada propriedade é uma combinação de uma chave (ou nome) e um valor, e os métodos são funções que podem ser executadas no objeto. Os objetos são usados ​​para representar entidades reais ou abstrações em um programa JavaScript. Eles podem ser criados usando literais de objeto ou a função construtora Object().

Objetos em JavaScript são usados para armazenar e acessar dados. Eles podem conter propriedades e métodos que permitem que os dados sejam acessíveis e manipulados. Objetos são úteis para organizar e gerenciar informações complexas, como conjuntos de dados relacionados e outros elementos. Por exemplo, você pode usar objetos para armazenar informações de dados de formulários, para definir aparências de websites ou para criar jogos interativos.
------------------------array-----------------------------

heterogeneo, dinamico, index, 
é uma forma de agrupar multiplos valores, variaveis. Fica dentro de [ ] , cada elemento separado por virgula ,
Os arrays são estruturas que servem para guardar dados, e organizá-los. Seu objetivo é ser um espaço fixo na memória do computador que armazena elementos. Esses elementos podem ser acessados por um tipo de indicação, que chamamos de índice, podendo ser um numero, 
em Js 
Em JavaScript, um array é um objeto que armazena uma coleção de valores de diferentes tipos. Os valores são acessados ​​por meio de índices, que são números inteiros que começam em 0. Os arrays são comumente usados ​​para armazenar e manipular conjuntos de dados em uma estrutura de dados ordenada. Eles podem ser criados usando a notação de colchetes [] e os elementos podem ser acessados ​​e modificados usando índices. Exemplo: var minhaArray = ["maça", "banana", "laranja"]; minhaArray[0] retorna "maça".

---------------tipos booleanos-----------------------
Em JavaScript, um tipo booleano é um tipo de dado que pode representar apenas dois valores: verdadeiro (true) ou falso (false). Eles são utilizados em operações lógicas e de comparação para determinar se uma expressão é verdadeira ou falsa. Por exemplo, uma expressão como "5 > 2" retornaria "true" enquanto "5 < 2" retornaria "false". Os tipos booleanos também podem ser atribuídos a variáveis, como em "let x = true;".
----------------------template string-------------------------
Uma string de modelo (também conhecida como template string) é uma nova forma de representar strings no JavaScript. Elas são marcadas por crases (`) ao invés de aspas simples ou duplas. Elas permitem a interpolação de expressões, ou seja, incluir variáveis dentro da string sem precisar concatená-las. As strings de modelo também permitem quebras de linha e tabulação sem precisar utilizar caracteres de escape.
Interpolação (interpretar) é o processo de inserir uma variável dentro de uma string. Em JavaScript, isso é feito utilizando as chaves {} e o sinal de crase . Por exemplo, ao se escrever Meu nome é ${nome}, onde nome` é uma variável, isso irá resultar em "Meu nome é (o valor da variável nome)". Isso é chamado de template string, é uma forma de fazer interpolação de strings.

-------------string--------
Uma string é um conjunto de caracteres em uma ordem específica. Ela pode ser usada para armazenar informações como nomes, endereços, frases e outras informações de texto. Em JavaScript, strings podem ser criadas usando aspas simples ou duplas, como por exemplo: "Olá mundo" ou 'Olá mundo'. Elas podem ser manipuladas usando métodos e propriedades específicos da linguagem, como por exemplo, o método .length para verificar o tamanho da string.

// podemos colocar dentro do template string expressoes...

---------------------------template string-------------------------------
sinal que abre a string é o ` `
sinal que antecede é a variavel é  ${}
 podemos colocar dentro do template string expressoes...

-------------o básico em Js----------------------------------------
Java Script é uma linguagem de tipagem fraca podemos mudar o tipo da variavel 

https://developer.mozilla.org/pt-BR/docs/Learn/Getting_started_with_the_web/JavaScript_basics

------Palavras reservadas------
Let
Const
var
-------------------let---------------------------------------- 
let permite que você declare variáveis limitando seu escopo no bloco, instrução, ou em uma expressão na qual ela é usada. Isso é inverso da keyword var (en-US), que define uma variável globalmente ou no escopo inteiro de uma função, independentemente do escopo de bloco.


------------------------------ Algoritimo -----------------------------
são sequências de passos  para resolver um problema. Em matemática e ciência da computação, um algoritmo é uma sequência finita de ações executáveis que visam obter uma solução para um determinado tipo de problema. Segundo Dasgupta, Papadimitriou e Vazirani; "Algoritmos são procedimentos precisos, não ambíguos, padronizados, eficientes e corretos.". Ajuda a tomar decisões, 
tem passos, algoritimo não é software, existem algoritimos de passos na vida real.

Podem ser representados por:
https://embarcados.com.br/representacao-de-algoritmos/
*fluxograma
*linguagem natural (portugês, Inglês, etc) liguagem passivel de duplicidade.
*Linguagem artificial (java, Js, Pyton) mais exata.
*pseudo-linguagem usa elementos artificiais e naturais (não interpretada pelo computador)

----------------------Algoritimo VS Linguagem ---------
Liguagens de alto nivel (javaScript mais perto da linguagem humana) X Linguagens de baixo nível (mais proximas do hardware, 0100100100101010)

-----------------Algoritimo Visão Geral-----------
Dados                            Processamento
entrada.1             (algoritimo comportamentos,comandos
entrada.2               verbo, ação).                         ---> Saída 
entrada.3

Leite                        bater o leite 
Fermento                      por fermento                      -----> bolo
açucar                       colocar a gosto
--------------------------------------------------------------
// var,let,const - declarador de variavel palavra reservada
// a       - identificador
// =       - simbolo de atribuição
// 3       - valor que se quer atribuir
// var a recebe o valor 3

------------------------------ variavel -----------------------------
cria um espaço de memoria no qual voce pode atribuir um valor "var" define que 
estamos colocando uma váriavel, o que vem depois do = é o identificador da variavel var ou let (definidor de variavel) nome (identificador) = 'caneta'; //string
Variables são contêineres que armazenam valores. Você começa declarando uma variável com a palavra-chave let, seguida do nome que você dá à variável:

--------------------- O que é um código de programação?-----------------------------
Resultado de imagem Resumindo, é o conjunto de instruções e declarações escritas por um programador usando uma linguagem de programação de computad

- ------------------------O código é organizado -----------------------------
em pastas, arquivos são orgazinados em extensões .js, .html etc

------------------------------Declaração-----------------------------
Em linguagens de programação, uma declaração especifica o identificador, Tipo, e outros aspectos dos elementos de linguagem, tais como variáveis e funções. Ele é usado para anunciar a existência do elemento para o compilador, o que é importante em muitas línguas (como C) que necessitam de variáveis declaradas, antes de usá-las.[1] ato de declarar consiste em 2 passos o nome que você dara a sua variavel e associar esse nome a um tipo de dado. 

------------------------------Uma sentença -----------------------------
corresponde a um passo do algoritmo ou a uma declaração. Se o código fonte descreve um algoritmo, então sentenças correspondem a passos do algoritmo, se não forem declarações. Ex: console.log('passo #03') //  sentença de codigo 

------------------------------ Bloco-----------------------------
Dentro do contexto de programação, os blocos são a unidade fundamental e podem representar comandos, condições, objetos e muitas outras variáveis que fazem parte da construção de um programa. Conjunto de sentenças. O Papel dele é agrupar sentenças.
ex: {
console.log('passo #03') // sentença de codigo 
console.log('passo #04')
console.log('passo #05')
}
// o bloco de codigo é definido pelo que tem dentro das chaves { }
// bloco par de chaves
// o bloco externo deve envolver o bloco interno {{{}}}

-----------------Dados e informação-----------------------------
é tudo que pode ser mensurado, coletado e analisado. Em informática consideramos DADOS como valores binários que podem ser números, cadeias de caracteres ou imagens sem interpretação. Estes dados foram obtidos da realidade através de algum processo de captura automática ou de codificação realizada por pessoas.

Enquanto os dados podem ser meros números, fatos não processados, a INFORMAÇAO é o que dá sentido ao que foi analisado. Os dados não são específicos, ao contrário da informação, que é um significado detalhado a partir do trabalho com elementos mais brutos.
------------------Estruturas de Dados--------------------------
Diferente de dados, estrutura de dados visa organizar, dar estruturas, colocar e analizar as regras e administrar os dados.
ex: estrutura fila (fifo primmeiro a entrar é o primeiro a sair) estrutura pilha de coisas(Lifo o ultimo a entrar [é o primeiro a sair) estrutura àrvore, estruturas básicas: inteiros, reais, letras, booleanos.
Podem ser armazenaods em Variaveis e Constantes: Ex valor de PI que não muda.
atribuir um dado a uma variavel e vai fazer operações com elas:
operações: Logicas (esperar que as condições sejam feitas)
relacionais: comparar uma coisa com outra
aritimeticas: somar 
criar estruturas personalizadas: ex mapeamentos personalidado.
---------------Tipos de dados-----------------------------------
https://www.dimap.ufrn.br/~richard/pubs/dim0320/readings/aula03.pdf

TIPOS NUMERICOS ( o Js não faz diferença entre numeros inteiros e reais Ex: 23343.33 ou 23343.33)
Inteiro: 
define variáveis numéricas do tipo inteiro, ou seja, sem casas decimais. ex: 1234567890
no Js sempre vai ser do tipo number

Real: 
define variáveis numéricas do tipo real, ou seja, com casas decimais: Ex: -40.9; 9.2

TIPOS CARACTERES
Caractere contem apenas letras, não pode ter números nem caracteres especiais. ex: "Daniel" 'casa'etc

TIPO ALFANUMERICO
constituido por sequencia de caracteres constituidos por letras, numeros ou simbolos especiais, em inglês é conhecido por STRING
contem caracteres define variáveis do tipo string, ou seja, cadeia de caracteres, devem ser usads dentro de aspas. Ex:"marcela" "10+3[ ] 9 0" ex: let nome = 'Caderno'// String(texto) -> sequencia de simbolos.

TIPO LOGICO
define variáveis do tipo booleano, ou seja, com valor VERDADEIRO ou FALSO. podem vir tambem como SIM ou NÃO, 1 ou 0, TRUE ou FALSE.

------------------------------ Concatenar -----------------------------
é uma palavra chique da programação que significa "colocar junto".O simbolo '+' serve para concatenar Concatenação é um termo usado em computação para designar  a operação de unir o conteúdo de duas strings. Por exemplo, considerando as strings "casa" e "mento" a concatenação da primeira com a segunda gera a string "casamento". Diversas linguagens de programação fornecem operadores binários para a concatenação. 
Ex:console.log('produto: ' + nome + ', ' + categoria)


----------------------------- console.log(typeof )----------------------
serve para ver o tipo da variavel 

----------- Comentários ----------------
Comentários são trechos de texto que podem ser adicionados junto com o código. O navegador ignora o texto marcado como comentários. Você pode escrever comentários em JavaScript da mesma forma que em CSS:

------------------------------------ Um operator ----------------------------------
https://developer.mozilla.org/pt-BR/docs/Glossary/Operator
é um símbolo matemático que produz um resultado baseado em dois valores (ou variáveis). Na tabela a seguir, você pode ver alguns dos operadores mais simples, juntamente com alguns exemplos para experimentar no console JavaScript.

*/