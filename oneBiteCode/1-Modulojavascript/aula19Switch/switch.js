switch ('b') {
  case 'a':
    alert('o Resultado é a')
    break
  case 'b':
    alert('o Resultado é b')
    break
  case 'c':
    alert('o Resultado é c')
    break
  default:
    alert('Finalizando')
}

/*
A estrutura condicional switch permite executar um bloco de código diferente de acordo com cada opção (cada case) especificada. Seu uso é indicado quando os valores a serem analisados nessas condições são pré-definidos

// entrada
let primeiraMedida = parseFloat(prompt('Insira sua medidada em metros: '))

let unidade = prompt(`Para qual medida você deseja converter
1. Milímetro (mm)
2. centímetro (cm)
3. Decímetro (dm)
4. Decâmetro (dam)
5. Hectômetro (hm)
6. Quilômetro (km)
`)

// processamento
let milimetro = primeiraMedida * 1000
let centimetro = primeiraMedida * 100
let decimetro = primeiraMedida * 10
let decametro = primeiraMedida / 10
let hecametro = primeiraMedida / 100
let quilômetro = primeiraMedida / 1000

// resultado
switch (unidade) {
  case '1':
    alert('Resultado é: ' + milimetro + ' mm')
    break
  case '2':
    alert('Resultado é: ' + centimetro + ' cm')
    break
  case '3':
    alert('Resultado é: ' + decimetro + ' dm')
    break
  case '4':
    alert('Resultado é: ' + decametro + ' dam')
    break
  case '5':
    alert('Resultado é: ' + hecametro + ' hm')
    break

  case '6':
    alert('Resultado é: ' + quilômetro + ' km')
    break
  default:
    alert('Opção invalida!')

}
*/