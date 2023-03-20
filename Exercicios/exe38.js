/**
 * 38) ​Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números 
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente 
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor
 */

function imprimirNumerosImpares(inicio = 0, fim = 100) {
    // Verificar se o início é maior que o fim e corrigir a ordem dos parâmetros
    if (inicio > fim) {
      let temp = inicio;
      inicio = fim;
      fim = temp;
    }
  
    // Imprimir todos os números ímpares entre o início e o fim
    for (let i = inicio; i <= fim; i++) {
      if (i % 2 !== 0) {
        console.log(i);
      }
    }
  }

  imprimirNumerosImpares(3,19)
