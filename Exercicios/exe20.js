/**20)​ Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1. 
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1 nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.  */

let cedulas = [100,50,10,5,1]
let valor = 69


for (let c = 0; c < cedulas.length ; c++ ){
    // divisão inteira
    let qtd = Math.floor(valor / cedulas[c])
    valor = valor % cedulas[c]
    //verifica se o qtd retornado é diferente de zero, se for maior q 0 tem o valor da nota
    if (qtd != 0){
        console.log(` ${qtd} Nota de R$ ${cedulas[c]}  `) 
    }
}

