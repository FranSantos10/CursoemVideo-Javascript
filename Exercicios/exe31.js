/**31) ​Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor 
e imprime a quantidade no console.  */

let vetor = [15,-1,2-5,10,3,-6]
let negativo =0
function Negativo(vetor){
    for(let cont =0 ; cont < vetor.length; cont++){
        if(vetor[cont] <0){
            negativo++
        }
    }
    console.log(`Há ${negativo} números Negativos no vetor`)
}

Negativo(vetor)