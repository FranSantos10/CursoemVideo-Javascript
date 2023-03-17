/**
 * 08) ​Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém 
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o 
mesmo é maior ou menor que seu melhor e pior desempenho. 
Dada uma lista string = “pontuação1 pontuação2 pontuação3 etc..”, 
escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior jogo. (Número do pior jogo). 

 */
// corrigido

let vetores   = "10 20 30 40 50 25 20 10 5 35 45 60"

function VerificarPontuacao(){
    // Converte a lista de pontuações de string para array de números
    let vetor = vetores.split(' ').map(Number);

    let maior = vetor[0]
    let menor = vetor[0]
    let records = 0
    let pontPiorjogo = 0

    for (cont = 0; cont < vetor.length ; cont ++){
        if ( vetor[cont]> maior){
            maior = vetor[cont]
            records++
        } else if ( vetor[cont]< menor){
            menor = vetor[cont]
            pontPiorjogo =cont
        } 
    }
    return ['Records: '+records , ' O pior jogo foi o ' +(pontPiorjogo +1)]
}

console.log(VerificarPontuacao())
