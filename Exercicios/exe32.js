/**32)​ Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiro */

let vetor = [10,25,30,35]
let media = 0
let soma = 0
function Media(vetor){
    for(let c = 0 ; c < vetor.length ; c++){
        soma = vetor[c] + soma
    }
    media = soma / vetor.length
    console.log(`A média dos valores: ${media}`)
}

Media(vetor)