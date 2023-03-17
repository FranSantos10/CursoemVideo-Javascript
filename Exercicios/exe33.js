/**33) ​Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais. 
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console */

let vetorInteiro = [1,2,3,4]
let vetorString = ['um','dois','três','quatro']
let vetorDecimal = [1.1,2.2,3.3,4.4]
let resp1, resp2

resp1 = vetorInteiro.concat(vetorString,vetorDecimal)
resp2 = vetorString.concat(vetorInteiro,vetorDecimal)


console.log(resp1)
console.log(resp2)
