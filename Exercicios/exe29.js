/**29) ​Utilizando a estrutura de repetição for,
 * faça uma função que percorra um vetor e conte quantos números deste vetor estão no intervalo [10,20] 
 * (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos deles estão fora do intervalo, escrevendo estas informações.
 */
let vetor = [9,10,11,18,19,20,21,23]

function Intervalo(){
    let dentro=0, fora=0
    for (let cont =0; cont< vetor.length; cont++){
        if(vetor[cont] >= 10 && vetor[cont] <=20){
            dentro++
        }else{
            fora++
        }
    }
    console.log(`No intervalo de 10 a 20, 
    ${dentro} estão dentro do intervalo e ${fora} estão fora do intervalo`)
}
Intervalo()
