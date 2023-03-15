/**
 *  ​Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true ou false
 */

function VerificaInteiro(num) {
    if (num % 3 === 0){
        return true
    }else {
        return false
    }
}
let num = 81
console.log(VerificaInteiro(num))
