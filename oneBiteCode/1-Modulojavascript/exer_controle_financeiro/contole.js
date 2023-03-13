
function controleFinanceiro() {
  // declaração de váriaveis
  let saldo = parseFloat(prompt('Insira a sua quantia inicial de dinheiro: '))
  let continuarOpcao = ''


  do {
    continuarOpcao = prompt(`
Saldo disponível: R$ ${saldo} reais.
Gostaria de:
1. Depositar.
2. Sacar.
3. Sair.
`)
    switch (continuarOpcao) {
      case '1':
        saldo += parseFloat(prompt('Informe o valor a ser depositado: '))
        break
      case '2':
        saldo -= parseFloat(prompt('Informe o valor a ser sacado: '))
        break
      case '3':
        alert('Encerrando...')
        break
      default:
        alert('Opção inválida, tente novamente.')
    }
  } while (continuarOpcao !== '3')

}

// entrada de dados

// processamento


// saída de resultados






/*

//Declaração de variáveis:

inicialQuantidade (armazena a quantidade inicial de dinheiro)

opcao (armazena a opção escolhida pelo usuário)

adicionar (armazena a quantidade a ser adicionada pelo usuário)
remover (armazena a quantidade a ser removida pelo usuário)
Entrada de dados:

Pedir ao usuário que informe a quantidade inicial de dinheiro
Pedir ao usuário que escolha uma das opções do menu

Se o usuário escolher a opção de adicionar dinheiro, pedir ao usuário que informe a quantidade a ser adicionada

Se o usuário escolher a opção de remover dinheiro, pedir ao usuário que informe a quantidade a ser removida


//Processamento:

Somar a quantidade inicial com a quantidade a ser adicionada e armazenar em inicialQuantidade, caso o usuário escolha a opção de adicionar dinheiro

Subtrair a quantidade a ser removida da quantidade inicial e armazenar em inicialQuantidade, caso o usuário escolha a opção de remover dinheiro
Saída de resultados:

Mostrar na tela a quantidade inicial de dinheiro e as opções de adicionar, remover e sair
Mostrar na tela a nova quantidade de dinheiro após adicionar ou remover, e as opções de adicionar, remover e sair, caso o usuário escolha a opção de adicionar ou remover dinheiro
Encerrar o programa, caso o usuário escolha a opção de sair.



Controle Financeiro

Escreva um programa em javascript que comece perguntando pela quantidade inicial de dinheiro disponível 

e então mostre na tela essa quantidade juntamente com as opções de adicionar e remover dinheiro e uma opção de sair. 

Ao clicar na opção de adicionar dinheiro o programa deve perguntar pela quantidade a ser adicionada, 
somar esse valor com a quantidade inicial e então mostrar novamente o menu com a quantidade de dinheiro e as opções. A opção de remover dinheiro deve fazer o mesmo, porém subtraindo o valor. A opção de sair deve encerrar o programa 




  let dinheiroDeposito = ""
  let dinheiroSaque = ""

      case '1':
        let dinheiroDeposito = Number(prompt('Insira quanto deseja depositar: '))
        alert('Seu novo saldo é de: R$ ' + Number(dinheiroDeposito + saldo) + ' reais.')
        break
      case '2':
        let dinheiroSaque = Number(prompt('Insira quanto deseja sacar: ') + ' reais.')
        alert('Seu novo saldo é de: R$ ' + Number(saldo - dinheiroSaque))
        break
      case '3':
        alert('Você escolheu sair, obrigado pela preferencia!')
        break
      default:
        alert('Opção invalida!')





*/