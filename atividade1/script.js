const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');

const soma = (num1, num2) => {
  return num1 + num2;
};
const subtracao = (num1, num2) => {
  return num1 - num2;
};
const multiplicacao = (num1, num2) => {
  return num1 * num2;
};
const divisao = (num1, num2) => {
  return num1 / num2;
};
const exibirResultados = () => {
  const numero1 = parseInt(num1.value);
  const numero2 = parseInt(num2.value);

  if (!isNaN(numero1) && !isNaN(numero2)) {
    const resultadoSoma = soma(numero1, numero2);
    const resultadoSubtracao = subtracao(numero1, numero2);
    const resultadoMultiplicacao = multiplicacao(numero1, numero2);
    const resultadoDivisao = divisao(numero1, numero2);

    alert(`Resultados:
      Soma: ${resultadoSoma}
      Subtração: ${resultadoSubtracao}
      Multiplicação: ${resultadoMultiplicacao}
      Divisão: ${resultadoDivisao}`);
  } else {
    alert('Por favor, insira números válidos nos campos.');
  }
};
document.addEventListener('DOMContentLoaded', function () {
  const button = document.querySelector('button');
  button.addEventListener('click', exibirResultados);
});
