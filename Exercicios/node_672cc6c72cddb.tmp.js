/**
 * 23)​ Escreva um algoritmo que leia o código de um aluno e suas três notas. 
 * Calcule a média ponderada do aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. 
 * Mostre o código do aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e "REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo
 */
//

while (true) {
  // Solicitar o código do aluno e verificar se é negativo
  let codigo = 10
  if (codigo < 0) {
    break;
  }

  // Solicitar as três notas do aluno
  let nota1 = 9
  let nota2 = 10
  let nota3 = 7

  // Calcular a média ponderada com os pesos especificados
  let maiorNota = Math.max(nota1, nota2, nota3);
  let mediaPonderada = (maiorNota * 4 + (nota1 + nota2 + nota3 - maiorNota) * 3) / 6;

  // Determinar se o aluno foi aprovado ou reprovado
  let situacao;
  if (mediaPonderada >= 5) {
    situacao = "APROVADO";
  } else {
    situacao = "REPROVADO";
  }

  // Exibir os resultados na tela
  
  console.log("Aluno " + codigo + ": notas " + nota1 + ", " + nota2 + " e " + nota3 + ", média ponderada " + mediaPonderada.toFixed(2) + ". Situação: " + situacao + ".");
}
