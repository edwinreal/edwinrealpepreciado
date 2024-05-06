function calcularIMC() {
  var peso = parseFloat(document.getElementById('weight').value);
  var altura = parseFloat(document.getElementById('height').value);

  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
      alert('Por favor, introduce valores válidos para peso y altura.');
      return;
  }

  var imc = peso / (altura * altura);
  document.getElementById('resultado').value = imc.toFixed(2);
}
