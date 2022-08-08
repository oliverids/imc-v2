const buttonCalculateImc = document.getElementById('button-calculate-imc'),
  inputWeight = document.getElementById('input-weight'),
  inputHeight = document.getElementById('input-height'),
  result = document.getElementById('result'),
  grau = document.getElementById('grau'),
  warning = document.getElementById('warning');

result.style.display = 'none';
warning.style.display = 'none';

function calculateImc(weight, height) {
  return weight / (height * height);
}

function checkResults(imc) {
  if (imc < 16) {
    result.style.display = 'none';
    warning.style.display = 'block';
  } else {
    result.style.display = 'flex';
    warning.style.display = 'none';

    if (16 < imc < 16.9) {
      grau.textContent = 'Muito abaixo de peso';
    } else if (17 < imc < 18.4) {
      grau.textContent = 'Abaixo de peso';
    } else if (18.5 < imc < 24.9) {
      grau.textContent = 'Peso normal';
    } else if (25 < imc < 29.9) {
      grau.textContent = 'Acima do peso';
    } else if (30 < imc < 34.9) {
      grau.textContent = 'Obesidade grau I';
    } else if (35 < imc < 40) {
      grau.textContent = 'Obesidade grau II';
    } else if (imc > 40) {
      grau.textContent = 'Obesidade grau III';
    }
  }
}

function handleCalculateImc() {
  let Weight = Number(inputWeight.value),
    Height = Number(inputHeight.value);

  let imc = calculateImc(Weight, Height),
    resultImc = document.getElementById('imc-result');

  result.style.display = 'inline-block';
  resultImc.textContent = `${imc.toFixed(2).replace('.', ',')} kg/m²`;

  checkResults(imc)
}

buttonCalculateImc.addEventListener('click', () => {
  if (inputHeight.value && inputWeight.value) {
    handleCalculateImc()
  }
})
