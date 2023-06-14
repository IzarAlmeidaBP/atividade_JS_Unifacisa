document.addEventListener('DOMContentLoaded', function () {
  const adicionarBtn = document.querySelector('button');
  adicionarBtn.addEventListener('click', function () {
    const nome = document.querySelector('#nome').value;
    const sobrenome = document.querySelector('#sobrenome').value;
    const nomeCompleto = nome + ' ' + sobrenome;

    const resultadoDiv = document.createElement('div');
    resultadoDiv.textContent = 'Nome completo: ' + nomeCompleto;
    document.body.appendChild(resultadoDiv);
  });
});
