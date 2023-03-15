/**
 * 08) ​Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém 
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o 
mesmo é maior ou menor que seu melhor e pior desempenho. 
Dada uma lista string = “pontuação1 pontuação2 pontuação3 etc..”, 
escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um 
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior jogo. (Número do pior jogo). 

 */
// revisar pois esta errado

let vetor   = [10,6,3,4,10,9]

function VerificarPontuacao(){
    let maior = vetor[0]
    let menor = vetor[0]
    let rep = 0

    for (cont = 0; cont < vetor.length ; cont ++){
        if ( vetor[cont]> maior){
            maior = vetor[cont]
        }
        if ( vetor[cont]< menor){
            menor = vetor[cont]
        } 
    }
    for( let i = 0; i < vetor.length ; i ++){
        if(maior == vetor[i]){
            rep = rep +1
        }
    }
    console.log(`Maior pontuação ${maior} e quantidade de vezes que bateu seu recorde ${rep}`)
    console.log(`Menor pontuação ${menor}`)

}

VerificarPontuacao()
