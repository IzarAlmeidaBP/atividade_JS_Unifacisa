document.addEventListener('DOMContentLoaded', function () {
  const enviarDado = document.querySelector('#enviarDado');
  enviarDado.addEventListener('click', function () {
    const numero = document.querySelector('#dado').value;
    const resultadoElement = document.querySelector('#resultado');

    if (!isNaN(numero)) {
      if (Number.isInteger(parseFloat(numero))) {
        resultadoElement.textContent = 'O valor inserido é um número inteiro.';
      } else {
        resultadoElement.textContent =
          'O valor inserido é um número decimal (float).';
      }
    } else {
      resultadoElement.textContent = 'O valor inserido é uma string.';
    }
  });
});
