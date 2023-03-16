/**21)​ Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 
 * 1) crianças com menos de 10 anos pagam R$80; 
 * 2) conveniados com idade entre 10 e 30 anos pagam R$50; 
 * 3) conveniados com idade acima de  30 e até 60 anos pagam R$ 95; e 
 * 4) conveniados acima de 60 anos pagam R$130  */

let plano = 100
function  PlanoSaude(idade) {
    if (idade < 10){
        adc = 80
        console.log(`Valor do plano é R$${plano} + o adicional de R$${adc}
        Total: R$${plano + adc}`)
    }  else if (idade >= 10 && idade <=30 ){
        adc = 50
        console.log(`Valor do plano é R$${plano} + o adicional de R$${adc}
        Total: R$${plano + adc}`)
    }  else if (idade >= 31 && idade <=60 ){
        adc = 95
        console.log(`Valor do plano é R$${plano} + o adicional de R$${adc}
        Total: R$${plano + adc}`)
    } else{
        adc = 130
        console.log(`Valor do plano é R$${plano} + o adicional de R$${adc}
        Total: R$${plano + adc}`)
    }
}
//let idade = 65
PlanoSaude(9)
PlanoSaude(15)
PlanoSaude(55)
PlanoSaude(65)