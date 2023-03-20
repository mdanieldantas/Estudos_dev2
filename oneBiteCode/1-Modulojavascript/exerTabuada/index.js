

// declaração de variáveis
let resultado = ''
// entrada de dados
let numero = parseInt(prompt('Escreva o numero que quer Multiplicar: '))
// validação de dados

// processamento - for (inicialização; condição; finalização)
for (
  let fator = 1;
  fator <= 20;
  fator++
) {
  resultado += '->' + numero + ' * ' + fator + " = " + (numero * fator) + '\n'
}
// saída de resultados
alert('O resultado da tabuada de ' + numero + ':\n\n' + resultado)




/*
## Robô da Tabuada

Escreva um programa em javascript que seja capaz de calcular a tabuada de um determinado número (de 1 a 20). 

O programa deve começar pedindo o número a ser usado nos cálculos e então salvar todos os resultados de multiplicações de 1 a 20 usando o número informado dentro de uma variável do tipo string. 


Depois o programa deve exibir esses resultados e finalizar.
*/