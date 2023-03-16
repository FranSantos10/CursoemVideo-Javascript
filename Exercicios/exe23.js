/**
 * 23)​ Escreva um algoritmo que leia o código de um aluno e suas três notas. 
 * Calcule a média ponderada do aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. 
 * Mostre o código do aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e "REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo
 */
//REFAZER
function Aprovacao(cod, n1,n2,n3){

    let notas = [n1,n2,n3];
    let maiorNota = Math.max(...notas);
    console.log(maiorNota); // imprime a maior nota

    let mp , pesoM = 4, pesoI = 3

    mp = (maiorNota * pesoM + ( n2 * pesoI + n3 * pesoI))/(pesoM+(pesoI*2))   
        
    if (mp >= 5 ){
        console.log(`${mp}`)
    } 
}

Aprovacao(1,10,10,5)