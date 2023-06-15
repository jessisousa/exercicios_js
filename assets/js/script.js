function calcularMedia() {
  var nota1 = parseFloat(document.getElementById("nota1").value.replace(",", "."));
  var nota2 = parseFloat(document.getElementById("nota2").value.replace(",", "."));

  if (isNaN(nota1) || isNaN(nota2)) {
      alert("Por favor, insira valores válidos para as notas.");
      return;
  }

  var media = (nota1 + nota2) / 2;
  var resultado = document.getElementById("resultado");

  if (media === 10) {
      resultado.innerHTML = "Aprovado com Distinção";
  } else if (media >= 7) {
      resultado.innerHTML = "Aprovado";
  } else {
      resultado.innerHTML = "Reprovado";
  }
}