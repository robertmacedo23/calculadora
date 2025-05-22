function calculo(num1, num2, operacao) {
  if (operacao === "soma") {
    return num1 + num2;
  } else if (operacao === "subtração") {
    return num1 - num2;
  } else {
    return null;
  }
}

function executarCalculo() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operacao = document.getElementById("operacao").value.trim().toLowerCase();
  const resultadoElemento = document.getElementById("resultado");

  if (isNaN(num1) || isNaN(num2)) {
    resultadoElemento.textContent = "Por favor, digite números válidos.";
    return;
  }

  const resultado = calculo(num1, num2, operacao);

  if (resultado !== null) {
    resultadoElemento.textContent = `O resultado é: ${resultado}.`;
  } else {
    resultadoElemento.textContent = "Operação inválida. Use 'soma' ou 'subtração'.";
  }
}
