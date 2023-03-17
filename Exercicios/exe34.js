/**Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso 
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavra */

let nome1 = 'Franci'
let nome2 = 'fransi'

function Verificapalavra(nome1, nome2){
    nome1 = nome1.toLowerCase()
    nome2 = nome2.toLowerCase()

    nome1 = nome1.split('').sort()
    nome2 = nome2.split('').sort()

    // comparar os nomes 
    var cont = 0;
    var cont2 = 0;

    while (cont < nome1.length && cont2 < nome2.length) {
        if (nome1[cont] < nome2[cont2]) {
            cont++;

        } else if (nome1[cont] > nome2[cont2]) {
            cont2++;
            
        } else {
            cont++;
            cont2++;
        }
    }
    return (cont2 == nome2.length && cont == nome1.length); // retorna verdadeiro se todos os caracteres estão contidos em ambas as strings  
     
}

console.log(Verificapalavra(nome1,nome2))