/*
01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores.
*/

function calcular(n1=0 , n2=0){
    console.log(`Soma: ${n1+n2} `)
    console.log(`Subtração: ${n1-n2} `)
    console.log(`Multiplicação: ${n1*n2} `)
    console.log(`Divisão: ${n1/n2} `)
}

calcular(10,20)
