document.addEventListener('DOMContentLoaded', function () {
  const exibirBtn = document.querySelector('#exibirBtn');
  exibirBtn.addEventListener('click', function () {
    const dropdown = document.querySelector('#diaSemana');
    const diaSelecionado = dropdown.value;
    const resultadoElement = document.querySelector('#resultado');

    resultadoElement.textContent = 'Dia selecionado: ' + diaSelecionado;
  });
});
