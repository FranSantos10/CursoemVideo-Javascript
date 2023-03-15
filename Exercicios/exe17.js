/**
 * 17)​ Um funcionário irá receber um aumento de acordo com o seu plano de 
trabalho, de acordo com a tabela abaixo:  
Plano  Aumento 
A  10% 
B  15% 
C  20% 
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido
 */


function Aumento(plano, salario){
    switch (plano){
        case 'A':   salario += salario * 0.1
                    console.log(`O seu novo salário é R$ ${salario}`)
        break;
        case 'B':   salario += salario * 0.15
                    console.log(`O seu novo salário é R$ ${salario}`)
        break;
        case 'C':   salario += salario * 0.20
                    console.log(`O seu novo salário é R$ ${salario}`)
        break;
        default: console.log('Plano inválido, informe novamente')
    }
}
Aumento('C',1099)