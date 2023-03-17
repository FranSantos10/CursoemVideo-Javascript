/**
 * 23)​ Escreva um algoritmo que leia o código de um aluno e suas três notas. 
 * Calcule a média ponderada do aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. 
 * Mostre o código do aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e "REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo
 */
//corrigido

let codigoAluno = 0;

while (codigoAluno >= 0) {
  codigoAluno = 0
  if (codigoAluno >= 0) {
    const nota1 = 9
    const nota2 = 10
    const nota3 = 7

    const pesoNota1 = 4;
    const pesoNotas23 = 3;
    const notasOrdenadas = [nota1, nota2, nota3].sort((a, b) => b - a); // Ordena as notas em ordem decrescente

    const media = ((notasOrdenadas[0] * pesoNota1) + (notasOrdenadas[1] * pesoNotas23) + (notasOrdenadas[2] * pesoNotas23)) / 10;

    console.log(`Aluno ${codigoAluno}: notas ${nota1}, ${nota2}, ${nota3}. Média: ${media.toFixed(1)}.`);
    
    if (media >= 5) {
      console.log("APROVADO");
    } else {
      console.log("REPROVADO");
    }
  }
}
