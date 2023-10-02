document.addEventListener("DOMContentLoaded", function () {
  const calcularButton = document.getElementById("calcularButton");

  calcularButton.addEventListener("click", function () {
    const salarioBruto = parseFloat(document.getElementById("salarioBruto").value);

    // Regras do INSS (2021)
    let inss = 0;
    if (salarioBruto <= 1045) {
      inss = salarioBruto * 0.075;
    } else if (salarioBruto <= 2089.6) {
      inss = salarioBruto * 0.09 - 15.67;
    } else if (salarioBruto <= 3134.4) {
      inss = salarioBruto * 0.12 - 78.36;
    } else if (salarioBruto <= 6101.06) {
      inss = salarioBruto * 0.14 - 141.05;
    } else {
      inss = 713.09; // Para salários acima de 6101.06
    }

    // Regras do Imposto de Renda (2021)
    const baseCalculo = salarioBruto - inss;
    let irpf = 0;
    if (baseCalculo <= 1903.98) {
      irpf = 0;
    } else if (baseCalculo <= 2826.65) {
      irpf = (baseCalculo * 0.075) - 142.8;
    } else if (baseCalculo <= 3751.05) {
      irpf = (baseCalculo * 0.15) - 354.8;
    } else if (baseCalculo <= 4664.68) {
      irpf = (baseCalculo * 0.225) - 636.13;
    } else {
      irpf = (baseCalculo * 0.275) - 869.36;
    }

    const salarioLiquido = salarioBruto - inss - irpf;
    document.getElementById("salarioLiquido").textContent = salarioLiquido.toFixed(2);
  });
});
