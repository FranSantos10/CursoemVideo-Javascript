/** ​Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor */

let vetor = [21,20,34,95,99]
let maior= vetor[0]
let menor= vetor[0]

function CalcularMaioreMenor(vetor){
    
    for(let cont = 1; cont < vetor.length; cont++){
        if(vetor[cont] > maior){
            maior =  vetor[cont]            
            
        }else if(vetor[cont] < menor){
            menor =  vetor[cont]
        }   
    }
    console.log(`Maior valor é ${maior} e Menor valor é ${menor}`)
}
CalcularMaioreMenor(vetor)