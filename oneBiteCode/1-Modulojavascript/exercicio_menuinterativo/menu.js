// declaração de váriaveis
let opção = ''

// processamento
do {
  opção = prompt(`
  Seja bem vindo(a)!

  Escolha uma das opções abaixo:
  1. Falar com atendente.
  2. Ver produtos.
  3. Fazer cadastro.
  4. Falar com financeiro.
  5. Encerrar atendimento.
  `)

  switch (opção) {
    case '1':
      alert('Você escolheu falar com atendente.')
      break
    case '2':
      alert('Você escolheu Ver produtos')
      break
    case '3':
      alert('Você escolheu fazer cadastro')
      break
    case '4':
      alert('Você escolheu falar com financeiro')
      break
    case '5':
      alert('Você escolheu encerrar atendimento')
      break
    default:
      alert('Opção invalida!')
  }

} while (opção !== '5')

// resultado


/*

Escreva um programa em javascript que simule um menu interativo com 5 opções diferentes. O programa deverá iniciar mostrando as 5 opções disponíveis, as quatro primeiras não precisam de nenhuma funcionalidade específica, a última opção deve ser a opção “Encerrar”. Ao clicar em alguma das quatro primeiras opções uma mensagem deve ser exibida na tela indicando qual foi a opção escolhida e depois o programa deve exibir novamente o menu com as 5 opções. Isso deve continuar acontecendo até que o usuário escolha a opção “Encerrar”. Ao escolhe-la uma mensagem dizendo que o sistema está sendo encerrado deve ser exibida na tela e então o programa é finalizado.


Escreva um programa em javascript que simule um menu interativo com 5 opções diferentes. 

O programa deverá iniciar mostrando as 5 opções disponíveis, as quatro primeiras não precisam de nenhuma funcionalidade específica, a última opção deve ser a opção “Encerrar”.

Ao clicar em alguma das quatro primeiras opções uma mensagem deve ser exibida na tela indicando qual foi a opção escolhida e depois o programa deve exibir novamente o menu com as 5 opções.

Isso deve continuar acontecendo até que o usuário escolha a opção “Encerrar”. 

Ao escolhe-la uma mensagem dizendo que o sistema está sendo encerrado deve ser exibida na tela e então o programa é finalizado.



Mostrar o menu com as opções disponíveis:

Exibir as opções em um formato legível para o usuário
Exibir o número de cada opção para facilitar a escolha do usuário
Solicitar que o usuário escolha uma opção:

Aguardar que o usuário clique em uma das opções exibidas
Armazenar a escolha do usuário em uma variável para utilização posterior
Verificar a opção escolhida pelo usuário:

Utilizar uma estrutura de controle de fluxo (como "if" ou "switch") para verificar qual opção foi escolhida
Caso a opção escolhida seja uma das quatro primeiras, exibir uma mensagem correspondente à opção escolhida
Caso a opção escolhida seja "Encerrar", definir uma variável booleana para "true" para finalizar o programa
Repetir a exibição do menu enquanto o usuário não escolher a opção "Encerrar":

Utilizar uma estrutura de repetição (como "while" ou "do-while") para repetir a exibição do menu e a solicitação de escolha de opção pelo usuário
Caso a variável booleana definida na etapa anterior for "true", finalizar a repetição e avançar para a próxima etapa
Exibir uma mensagem de encerramento do programa:

Exibir uma mensagem indicando que o programa está sendo encerrado
Encerrar a execução do programa


// processamento
let milimetro = primeiraMedida * 1000
let centimetro = primeiraMedida * 100
let decimetro = primeiraMedida * 10
let decametro = primeiraMedida / 10
let hecametro = primeiraMedida / 100
let quilômetro = primeiraMedida / 1000
*/