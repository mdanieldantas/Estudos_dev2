/*
Neste exemplo, o código segue a estrutura mencionada anteriormente:

Início: Uma mensagem de boas-vindas é exibida para o usuário.
Entrada: O usuário é solicitado a inserir a temperatura em graus Celsius, que é armazenada na variável tempCelsius.
Processamento: A conversão de temperatura é realizada usando a fórmula apropriada.
Saída: O resultado da conversão é exibido ao usuário.
Final: Uma mensagem de agradecimento é exibida, encerrando o algoritmo.
Espero que esse exemplo tenha ajudado a ilustrar como os diferentes passos de início, entrada, processamento, saída e final se encaixam em um algoritmo simples usando lógica de programação em JavaScript.
*/

// Início: Configuração inicial e declaração de variáveis
console.log("Bem-vindo à Conversão de Temperatura!");

// Entrada: Solicita ao usuário que insira a temperatura em graus Celsius
const tempCelsius = parseFloat(prompt("Digite a temperatura em graus Celsius:"));

// Processamento: Realiza o cálculo da conversão de temperatura
const tempFahrenheit = (tempCelsius * 9 / 5) + 32;

// Saída: Exibe o resultado da conversão em Fahrenheit
console.log(`A temperatura de ${tempCelsius} graus Celsius é equivalente a ${tempFahrenheit.toFixed(2)} graus Fahrenheit.`);

// Final: Encerramento do algoritmo
console.log("Obrigado por usar a Conversão de Temperatura. Até a próxima!");
